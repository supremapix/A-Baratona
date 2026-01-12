import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NEWS_ITEMS, COMPANY_INFO, IMAGES } from '../constants';
import NotFound from './NotFound';
import ContactForm from '../components/ContactForm';
import PageTransition from '../components/PageTransition';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = NEWS_ITEMS.find(item => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <NotFound />;
  }

  // Related posts logic (excluding current)
  const relatedPosts = NEWS_ITEMS.filter(item => item.id !== post.id).slice(0, 3);

  return (
    <PageTransition>
      <Helmet>
        <title>{post.title} | Blog A Baratona</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://abaratonacacambas.com.br/blog/${post.slug}`} />
      </Helmet>

      <div className="bg-gray-50 min-h-screen pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-8">
            <ol className="flex text-sm text-gray-500">
               <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
               <li className="mx-2">/</li>
               <li><span className="text-gray-400">Blog</span></li>
               <li className="mx-2">/</li>
               <li className="text-secondary font-bold truncate max-w-[200px] sm:max-w-none">{post.title}</li>
            </ol>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Article Column */}
            <div className="lg:col-span-2">
              <article className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="relative h-64 md:h-96 w-full">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                        {post.category}
                    </span>
                    <h1 className="text-2xl md:text-4xl font-black leading-tight mb-2 shadow-sm">
                        {post.title}
                    </h1>
                    <div className="flex items-center text-sm text-gray-300 gap-4">
                        <span><i className="far fa-calendar-alt mr-2"></i> {post.date}</span>
                        <span><i className="far fa-user mr-2"></i> Por Equipe A Baratona</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div 
                    className="prose prose-lg max-w-none prose-orange prose-headings:font-bold prose-headings:text-secondary prose-p:text-gray-600 prose-li:text-gray-600"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Share / Tags */}
                  <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                      <div className="text-gray-500 font-bold text-sm">
                          Compartilhe este artigo:
                      </div>
                      <div className="flex gap-3">
                          <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                              <i className="fab fa-facebook-f"></i>
                          </button>
                          <button className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                              <i className="fab fa-whatsapp"></i>
                          </button>
                          <button className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                              <i className="fab fa-twitter"></i>
                          </button>
                      </div>
                  </div>
                </div>
              </article>

              {/* Related Posts */}
              <div className="mt-12">
                  <h3 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">Leia Também</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {relatedPosts.map(rel => (
                          <Link to={`/blog/${rel.slug}`} key={rel.id} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all">
                              <div className="h-40 overflow-hidden">
                                  <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                              </div>
                              <div className="p-5">
                                  <span className="text-xs text-primary font-bold uppercase">{rel.category}</span>
                                  <h4 className="font-bold text-secondary text-lg mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">{rel.title}</h4>
                                  <p className="text-gray-500 text-xs line-clamp-2">{rel.excerpt}</p>
                              </div>
                          </Link>
                      ))}
                  </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
                {/* CTA Box */}
                <div className="bg-secondary text-white rounded-2xl p-8 text-center relative overflow-hidden shadow-2xl sticky top-24">
                     <div className="absolute inset-0 bg-primary/10"></div>
                     <div className="relative z-10">
                         <img src={IMAGES.mascot} alt="Rei da Caçamba" className="w-24 h-24 rounded-full mx-auto border-4 border-primary mb-4 bg-white object-cover" />
                         <h3 className="text-xl font-bold mb-2">Gostou das dicas?</h3>
                         <p className="text-gray-300 text-sm mb-6">Agora coloque em prática na sua obra. Alugue sua caçamba com a melhor de Curitiba.</p>
                         <a 
                             href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=Olá, vi o post sobre ${post.title} e gostaria de um orçamento.`}
                             className="block w-full bg-[#25D366] py-3 rounded-lg font-bold hover:bg-green-500 transition-colors"
                         >
                             <i className="fab fa-whatsapp mr-2"></i> PEDIR ORÇAMENTO
                         </a>
                     </div>
                </div>

                {/* Newsletter (Visual Only) */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h4 className="font-bold text-secondary mb-2">Receba novidades</h4>
                    <p className="text-gray-500 text-sm mb-4">Dicas de obra e promoções exclusivas no seu e-mail.</p>
                    <div className="flex gap-2">
                        <input type="email" placeholder="Seu e-mail" className="flex-1 bg-gray-50 border border-gray-200 rounded px-3 py-2 text-sm outline-none focus:border-primary" />
                        <button className="bg-primary text-white px-3 py-2 rounded text-sm font-bold hover:bg-orange-600">OK</button>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default BlogPost;