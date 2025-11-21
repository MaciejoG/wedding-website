import engagementPhoto from "@/assets/engagement-photo.jpeg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${engagementPhoto})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>
      
      <div className="relative flex h-full flex-col items-center justify-end pb-16 px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-bordeaux drop-shadow-lg">
          Cassandra & Maciej
        </h1>
      </div>
    </section>
  );
};

export default Hero;
