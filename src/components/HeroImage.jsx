export default function HeroImage(props) {
  return (
    <div className="grid landscape:col-start-2 landscape:col-end-4 landscape:row-start-1 landscape:row-end-2 landscape:w-[90%]">
      <img
        src="pattern-bg.svg"
        alt=""
        className="col-start-1 col-end-1 row-start-1 row-end-1 w-full portrait:h-full"
      />
      <div className="col-start-1 col-end-1 row-start-1 row-end-1 w-[85%] place-self-center relative">
        <img
          src="image-tanya.jpg"
          alt=""
          className="rounded-[0.5em] w-full landscape:w-11/12 shadow-2xl hero-image transition-opacity duration-1000 opacity-0"
        />
        <div className="flex gap-[3em] bg-white absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 p-[1em] rounded-full landscape:left-1/4 z-50">
          <img
            src="icon-prev.svg"
            alt=""
            className="w-[0.9em] cursor-pointer"
            onClick={() => props.setData((prev) => !prev)}
          />
          <img
            src="icon-next.svg"
            alt=""
            className="w-[0.9em] cursor-pointer"
            onClick={() => props.setData((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
}
