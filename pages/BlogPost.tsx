import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NEWS_ITEMS, COMPANY_INFO, IMAGES } from '../constants';
import NotFound from './NotFound';
import ContactForm from '../components/ContactForm';
import PageTransition from '../components/PageTransition';
import AnimatedAlertIcon from '../components/AnimatedAlertIcon';
import ShareButtons from '../components/ShareButtons';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = NEWS_ITEMS.find(item => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = NEWS_ITEMS.filter(item => item.id !== post.id).slice(0, 3);
  const currentUrl = window.location.href;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": post.title,
    "image": [post.image],
    "datePublished": new Date(post.date).toISOString() || new Date().toISOString(),
    "author": [{
        "@type": "Organization",
        "name": COMPANY_INFO.name,
        "url": "https://abaratonacacambas.com.br"
    }]
  };

  return (
    <PageTransition>
      <Helmet>
        <title>{post.title} | Blog A Baratona</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://abaratonacacambas.com.br/blog/${post.slug}`} />
        
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="bg-gray-50 min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 mb-8">
            <ol className="flex text-sm text-gray-500">
               <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
               <li className="mx-2">/</li>
               <li><Link to="/#news" className="hover:text-primary transition-colors">Blog</Link></li>
               <li className="mx-2">/</li>
               <li className="text-secondary font-bold truncate max-w-[200px] sm:max-w-none">{post.title}</li>
            </ol>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative h-64 md:h-96 w-full group">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block shadow-md">{post.category}</span>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-2 shadow-sm">{post.title}</h1>
                  </div>
                </div>

                <div className="p-6 md:p-12">
                  <div className="prose prose-orange prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                  <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50 -mx-6 md:-mx-12 -mb-6 md:-mb-12 p-8">
                      <div className="text-gray-500 font-bold text-sm uppercase tracking-wide">Gostou? Compartilhe:</div>
                      <ShareButtons url={currentUrl} title={post.title} description={`Olha que dica top da A Baratona: "${post.title}". Vale a pena ler!`} />
                  </div>
                </div>
              </article>
            </div>

            <div className="space-y-8">
                <div className="bg-secondary text-white rounded-2xl p-8 text-center relative overflow-hidden shadow-2xl sticky top-24 z-10">
                     <AnimatedAlertIcon size="lg" className="!mt-0 mb-6" />
                     <h3 className="text-xl font-bold mb-2">Gostou das dicas?</h3>
                     <a href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=Olá, vi o post sobre ${post.title} e gostaria de um orçamento.`} className="block w-full bg-[#25D366] py-3 rounded-xl font-bold hover:bg-green-500 transition-colors">
                         <i className="fab fa-whatsapp mr-2"></i> PEDIR ORÇAMENTO
                     </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default BlogPost;