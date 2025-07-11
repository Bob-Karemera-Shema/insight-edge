import { getBlurDataURLFromLocalPath } from "@/lib/getBlurDataURL";
import Image from "next/image";

export const Hero = async () => {
    const coverBlur = await getBlurDataURLFromLocalPath('hero.jpg');
    const avatarBlur = await getBlurDataURLFromLocalPath('avatar.png');

    return (
        <section className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
                src='/hero.jpg'
                alt="Article cover"
                fill
                className="max-h-[600px] w-full rounded-lg"
                placeholder="blur"
                blurDataURL={coverBlur}
                priority
            />
            <article className="absolute -bottom-24 md:-bottom-12 md:left-12 p-6 bg-container-light-gray rounded-lg space-y-4 max-w-[598px] w-full shadow-lg">
                <span className="bg-custom-blue text-white py-1 px-2 rounded-md">
                    Technology
                </span>
                <h1 className="font-semibold text-3xl md:text-4xl mt-4">
                    The Impact of Technology on the Workplace: How Technology is Changing
                </h1>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <Image
                            className="w-9 h-9 rounded-full"
                            src='/avatar.png'
                            alt="Author"
                            width={460}
                            height={460}
                            placeholder="blur"
                            blurDataURL={avatarBlur}
                        />
                        <span className="font-medium text-font-light-gray">Jason Francisco</span>
                    </div>
                    <span className="text-font-light-gray">August 20, 2022</span>
                </div>
            </article>
        </section>
    );
}