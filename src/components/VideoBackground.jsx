export default function VideoBackground({ looping }) {
  return (
    <div className={`video-container ${looping ? "" : "looping"}`}>
      <video autoPlay="True" muted loop src="/assets/homepage-loop.mp4" type="video/mp4"></video>
    </div >
  );
}