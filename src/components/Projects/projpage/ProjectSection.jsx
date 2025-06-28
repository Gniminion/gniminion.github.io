import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ProjectSection({ 
  id, 
  title, 
  content, 
  images, 
  forwardedRef 
}) {
  const getImagePath = (imageName) => {
    if (!imageName) return '';
    if (imageName.startsWith('http')) return imageName;
    return `/portfolio/projects/${imageName}`;
  };

  return (
    <section id={id} ref={forwardedRef} className="mb-16">
      <h2 className="text-2xl mb-6">{title}</h2>

      <div className="prose prose-invert max-w-none whitespace-pre-line">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content || `${title} content coming soon...`}
        </ReactMarkdown>
      </div>

      {images?.map((image, index) => (
        <figure key={index} className="mt-8">
          <img 
            src={getImagePath(image.src)} 
            alt={image.caption}
            className="w-full rounded-lg"
            loading="lazy"
          />
          <figcaption className="mt-2 text-sm text-gray text-center">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </section>
  );
}

export default ProjectSection; 
