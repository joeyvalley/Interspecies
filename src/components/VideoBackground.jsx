export default function VideoBackground({ looping }) {
  console.log(looping);
  return (
    <div className={`video-container ${looping ? "" : "looping"}`}>
      <video autoPlay="True" muted loop src="/assets/homepage-loop.mp4" type="video/mp4"></video>
      {/* <img src="/assets/test.jpg" alt="Background" /> */}
    </div >
  );
}