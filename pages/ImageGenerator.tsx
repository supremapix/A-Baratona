import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import PageTransition from '../components/PageTransition';

// Local interface to avoid global Window type conflict
interface AIStudioClient {
  hasSelectedApiKey: () => Promise<boolean>;
  openSelectKey: () => Promise<void>;
}

const ImageGenerator: React.FC = () => {
  const [apiKeySet, setApiKeySet] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Helper to access window.aistudio safely
  const getAIStudio = (): AIStudioClient | undefined => {
    return (window as any).aistudio;
  };

  const checkApiKey = async () => {
    const aistudio = getAIStudio();
    if (aistudio && await aistudio.hasSelectedApiKey()) {
      setApiKeySet(true);
    } else {
      setApiKeySet(false);
    }
  };

  useEffect(() => {
    checkApiKey();
  }, []);

  const handleSelectKey = async () => {
    const aistudio = getAIStudio();
    if (aistudio) {
      await aistudio.openSelectKey();
      await checkApiKey();
    }
  };

  const generateImage = async () => {
    if (!prompt) return;
    setLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      // Re-create AI instance with potentially new key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            imageSize: size,
            aspectRatio: aspectRatio,
          },
        },
      });

      // Find the image part in the response
      const parts = response.candidates?.[0]?.content?.parts;
      let found = false;
      if (parts) {
        for (const part of parts) {
          if (part.inlineData) {
            const base64Data = part.inlineData.data;
            const mimeType = part.inlineData.mimeType || 'image/png';
            setGeneratedImage(`data:${mimeType};base64,${base64Data}`);
            found = true;
            break;
          }
        }
      }

      if (!found) {
         setError("Nenhuma imagem foi gerada. Tente novamente.");
      }

    } catch (err: any) {
      console.error(err);
      if (err.message && err.message.includes("Requested entity was not found")) {
        // Reset key selection if invalid
        setApiKeySet(false);
        setError("Chave API inválida ou expirada. Por favor, selecione novamente.");
        const aistudio = getAIStudio();
        if (aistudio) {
           await aistudio.openSelectKey();
           await checkApiKey(); // Refresh state
        }
      } else {
        setError("Erro ao gerar imagem. Verifique sua conexão e tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-primary p-6 text-white text-center">
              <h1 className="text-3xl font-black mb-2">Gerador de Imagens IA</h1>
              <p className="opacity-90">Crie visuais incríveis para sua obra ou marketing com Nano Banana Pro</p>
            </div>

            <div className="p-8">
              {!apiKeySet ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-gray-400">
                    <i className="fas fa-key"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-secondary mb-4">Acesso Necessário</h2>
                  <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                    Para usar o modelo avançado de geração de imagens, você precisa conectar sua chave de API do Google AI Studio (projeto pago com faturamento ativado).
                  </p>
                  <button
                    onClick={handleSelectKey}
                    className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg"
                  >
                    Conectar Google AI Studio
                  </button>
                  <p className="mt-6 text-sm text-gray-400">
                    Consulte a <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">documentação de faturamento</a>.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Descreva sua imagem</label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Ex: Um caminhão de caçamba laranja moderno em um canteiro de obras futurista, estilo fotorealista..."
                      className="w-full border border-gray-300 rounded-xl p-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none min-h-[120px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">Tamanho</label>
                       <select 
                          value={size}
                          onChange={(e) => setSize(e.target.value as '1K'|'2K'|'4K')}
                          className="w-full border border-gray-300 rounded-xl p-3 focus:border-primary outline-none bg-white"
                       >
                         <option value="1K">1K (Padrão)</option>
                         <option value="2K">2K (Alta Definição)</option>
                         <option value="4K">4K (Ultra HD)</option>
                       </select>
                    </div>
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">Formato</label>
                       <select 
                          value={aspectRatio}
                          onChange={(e) => setAspectRatio(e.target.value)}
                          className="w-full border border-gray-300 rounded-xl p-3 focus:border-primary outline-none bg-white"
                       >
                         <option value="1:1">1:1 (Quadrado)</option>
                         <option value="16:9">16:9 (Paisagem)</option>
                         <option value="4:3">4:3 (Retrato Padrão)</option>
                         <option value="9:16">9:16 (Stories)</option>
                       </select>
                    </div>
                  </div>

                  <button
                    onClick={generateImage}
                    disabled={loading || !prompt}
                    className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all flex items-center justify-center gap-3 ${loading || !prompt ? 'bg-gray-400 cursor-not-allowed' : 'bg-secondary hover:bg-black hover:scale-[1.01]'}`}
                  >
                    {loading ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i> Gerando...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-magic"></i> Gerar Imagem
                      </>
                    )}
                  </button>

                  {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 flex items-center gap-3">
                      <i className="fas fa-exclamation-circle"></i>
                      {error}
                    </div>
                  )}

                  {generatedImage && (
                    <div className="mt-8 border-t border-gray-100 pt-8">
                      <h3 className="text-xl font-bold text-secondary mb-4">Resultado:</h3>
                      <div className="relative rounded-xl overflow-hidden shadow-2xl group">
                        <img src={generatedImage} alt="Imagem Gerada por IA" className="w-full h-auto" />
                        <a 
                          href={generatedImage} 
                          download="imagem-gerada-baratona.png"
                          className="absolute bottom-4 right-4 bg-white text-secondary px-6 py-2 rounded-full font-bold shadow-lg hover:bg-primary hover:text-white transition-colors"
                        >
                          <i className="fas fa-download mr-2"></i> Baixar
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ImageGenerator;