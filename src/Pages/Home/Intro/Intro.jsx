import service from "../../../assets/home/chef-service.jpg";
const Intro = () => {
  return (
    <div>
      <section className="relative my-5 mx-14">
        <img src={service} />
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="bg-white h-52 lg:w-4/5 md:w-3/5  top-10 bottom-10 right-24 left-44 text-center   ">
            <h4 className="text-2xl uppercase mt-10 ">Bistro Boss</h4>
            <p className="mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt <br /> ratione
              dolor officiis praesentium! Deserunt magni aperiam dolor eius
              dolore at, <br /> nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
