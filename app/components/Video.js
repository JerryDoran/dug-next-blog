export default function Video({ id }) {
  return (
    <div className='aspect-w-16 aspect-h-9'>
      <iframe
        src={`https://youtube.com/embed/${id}`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; webshare'
        frameborder='0'
      ></iframe>
    </div>
  );
}
