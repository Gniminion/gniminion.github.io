import ReactMarkdown from 'react-markdown';

function ProjectSection({ 
  id, 
  title, 
  content, 
  images, 
  mainImage,
  forwardedRef 
}) {
  const getImagePath = (imageName) => {
    if (!imageName) return '';
    if (imageName.startsWith('http')) return imageName;
    try {
      return `/portfolio/projects/${imageName}`;
    } catch (error) {
      console.error('Error loading image:', error);
      return '';
    }
  };

  return (
    <section id={id} ref={forwardedRef} className="mb-16">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      
      {mainImage && (
        <div className="aspect-video mb-8">
          <img 
            src={getImagePath(mainImage)} 
            alt={title}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>
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