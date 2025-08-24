import React from "react";
import ImageCursorTrail from "./ui/image-cursortrail";

const HoverAnim = () => {
  const images = [
    "https://i.pinimg.com/1200x/1f/cc/5a/1fcc5aca3ba16e92693b582b97045b58.jpg",
    "https://i.pinimg.com/736x/89/d5/c8/89d5c8141f094eb55fb051b66ea61ece.jpg",
    "https://i.pinimg.com/1200x/7f/96/3f/7f963f40354e025607e99205d19f52e6.jpg",
    "https://i.pinimg.com/736x/f6/d5/22/f6d522d8a803b6875845d2ec47400b69.jpg",

    "https://i.pinimg.com/1200x/2c/9a/7b/2c9a7b5b0ad781499518d73f8ba67ccb.jpg",
    "https://i.pinimg.com/1200x/dc/33/ff/dc33ff5e0caf07ba0602f9ca4673aef6.jpg",
    "https://i.pinimg.com/736x/56/c4/d1/56c4d14f03a62c325775999dedde55b7.jpg",
    "https://i.pinimg.com/736x/54/73/c1/5473c13a471722afc0d66aec514710f6.jpg",
    "https://i.pinimg.com/1200x/5e/40/17/5e401755712bbce3d02208fa1e1efdff.jpg",
    "https://i.pinimg.com/736x/dd/82/ac/dd82ace13b798f5360b0117935f9f975.jpg",
    "https://i.pinimg.com/736x/5f/9c/41/5f9c41ad68cf4905cc407e438372a19d.jpg",
    "https://i.pinimg.com/736x/41/49/06/4149062d989b39a43cefdcacebb12c09.jpg",
    "https://i.pinimg.com/1200x/0d/e4/9c/0de49c7c0b0dd3bfb08d1ada483fde17.jpg",
    "https://i.pinimg.com/736x/20/26/e8/2026e80897b4c1e1082a1de1bb662e6e.jpg",
  ];

  return (
    <div>
      <section className="mx-auto w-full rounded-[24px] p-2  md:rounded-t-[44px]  mt-20">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] bordermd:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] ">
          <ImageCursorTrail
            items={images}
            maxNumberOfImages={5}
            distance={25}
            imgClass="sm:w-40 w-28 sm:h-48 h-36  "
            className=" w-full rounded-3xl "
          >
            <article className="relative z-50 flex flex-col items-center justify-center ">
              <h1 className="max-w-2xl text-center text-4xl font-semibold tracking-tight text-gray-300 hidden sm:block">
                Hover To Explore Our Imaginary <br />
                Products Gallery
              </h1>
              <h1 className="max-w-2xl text-center text-4xl font-semibold tracking-tight text-gray-300 block sm:hidden">
                Click To Explore Our Imaginary <br />
                Products Gallery
              </h1>
            </article>
          </ImageCursorTrail>
        </div>
      </section>
    </div>
  );
};

export default HoverAnim;
