export default function Content() {
  return (
    <div className="relative z-10 landscape:col-start-1 landscape:col-end-3 landscape:row-start-1 landscape:row-end-2 place-self-center">
      <img
        src="pattern-quotes.svg"
        alt=""
        className="absolute left-1/2 -translate-x-1/2 w-[6em] landscape:left-1/3"
      />
      <p className="pt-[1.5em] text-dark-blue font-light text-[150%] text-center landscape:text-left landscape:ml-[20%] landscape:lg:text-[200%] description">
        "I've been interested in coding for a while but never taken the jump,
        until now. I couldn't recommend this course enough. I'm now in the job
        of my dreams and so excited about the future."
      </p>
      <div className="text-center pt-[1em] landscape:text-left landscape:flex landscape:gap-[1em] landscape:ml-[20%]">
        <p className="text-dark-blue font-bold text-[120%] author">
          Tanya Sinclair
        </p>
        <p className="text-greyish-blue font-medium text-[120%] role">
          UX Engineer
        </p>
      </div>
    </div>
  );
}
