import { NowPlaying } from "../components";
import Image from "next/image";
import Banners from "../components/Banner";

const name = "meo";
const belowLink = "@meo";
/*const bio = "Otaku | Soñador | Observador 🗿";*/

const servername = "Made by Meo";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex min-h-screen flex-col bg-primary">
          <div
            style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            className="h-60 w-full bg-banner"
          />
          <div className="mx-auto -mt-20 flex w-full max-w-2xl flex-1 flex-col items-center px-0 sm:px-10">
            <div className="relative mb-6 flex w-full flex-col justify-center bg-opacity-90 px-2 sm:min-h-full sm:rounded-lg sm:px-6">
              <div className="flex flex-col items-center justify-center rounded-md p-2 py-4">
                <div className="relative">
                  <Image
                    className="h-40 w-40 rounded-full border-4 border-solid border-primary bg-primary object-cover"
                    src="/profile.png"
                    alt="profile"
                    width={512}
                    height={512}
                  />
                </div>
                <div className="relative flex flex-row items-center justify-center">
                  <div className="mb-1 flex flex-col">
                    <div className="mt-1 flex flex-row items-center justify-center">
                      <span className="flex text-center text-2xl font-bold leading-tight text-zinc-300">
                        {name}
                      </span>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-1 h-5 w-5 text-indigo-600"
                        >
                          <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-400 dark:text-gray-500">
                      <a
                      // rel="noopener noreferrer nofollow"
                      // target="_blank"
                      // href=""
                      >
                        {belowLink}
                      </a>
                    </p>
                    {/*<div className="mt-3 flex flex-col">
                      <p className="inline-block whitespace-pre-wrap text-center text-sm text-gray-500 dark:text-gray-400">
                        {bio}
                      </p>
                    </div>*/}
                  </div>
                </div>
                <div className="mt-3">
                <div className="mt-1 rounded pt-2">
    <div className="flex flex-row flex-wrap items-center justify-center">
      
      {/* Facebook Link */}
      <a
        rel="noopener noreferrer nofollow"
        target="_blank"
        href="/facebook"
        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
      >
        <svg
          className="h-6 fill-current text-pink-400 transition-all"
          role="img"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Facebook</title>
          <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
        </svg>
      </a>

      {/* GitHub Link */}
      <a
        rel="noopener noreferrer nofollow"
        target="_blank"
        href="/github"
        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
      >
        <svg
          className="h-6 fill-current text-primary transition-all dark:text-gray-100"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>GitHub</title>
          <path
            fill="#3E75C3"
            d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.5-.3-5-1.3-5-5.8 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.7 1.6.2 2.8.1 3.1.8.8 1.3 1.9 1.3 3.2 0 4.6-2.5 5.5-4.9 5.8.4.4.7 1.1.7 2.2v3.3c0 .4.2.7.8.6 4.7-1.6 8.1-6.1 8.1-11.4C24 5.4 18.6 0 12 0z"
          />
        </svg>
                      </a>
                      <div className="flex items-center">
                        <div className="mx-auto inline-block">
                          <div className="flex cursor-pointer items-center justify-center space-x-2 rounded-full border-white border-opacity-10 px-2 py-2 hover:bg-white hover:bg-opacity-5">
                            <svg
                              className="h-5 fill-current text-indigo-500"
                              role="img"
                              viewBox="0 0 24 24"
                              fill="#7289DA"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Discord</title>
                              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                            </svg>
                            <p className="text-sm font-medium text-indigo-100">
                              <a
                                href="/discord"
                                className="text-sm font-medium text-indigo-100"
                              >
                                {servername}
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="max-w-s mt-1 w-full space-y-2">
                        <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href="/donate"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className="">💸</span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                    <span
                                      title="Nothing"
                                      className="text-ellipsis text-[16px] text-custom-cream"
                                    >
                                      Donate Me!
                                    </span>
                                    <span
                                      title="/donate"
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      โดเนทได้ที่นี่!
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </a>
                        </div>

                        <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href="/youtube"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
<div>
  <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
    <div className="flex items-center justify-center">
      <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
        <img
          src="/assests/youtube.svg"
          alt="YouTube"
          className="h-8 w-8" // Adjust size as neededs
        />
      </div>
      <div className="mx-4 flex flex-col">
        <span
          title="Nothing"
          className="text-ellipsis text-[16px] text-custom-cream"
        >
          Youtube
        </span>

                                    <span
                                      title="Web toolbox"
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      อันนี้ช่องผมนะ อย่าลืมไปติดตามกันนะ!!!
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </a>
                        </div>
 
                        <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href="/tiktok"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
<div>
  <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
    <div className="flex items-center justify-center">
      <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
        <img
          src="/assests/tiktok.svg"
          alt="Tiktok"
          className="h-8 w-8" // Adjust size as needed
        />
      </div>
      <div className="mx-4 flex flex-col">
        <span
          title="Nothing"
          className="text-ellipsis text-[16px] text-custom-cream"
        >
          TikTok
        </span>
                                    <span
                                      title=""
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      อันนี้ tiktok ผมเอง!
                                    </span> 
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </a>
                        </div>

                        <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href="/steam"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className=""> 🎮 </span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                    <span
                                      title="Nothing"
                                      className="text-ellipsis text-[16px] text-custom-cream"
                                    >
                                      Steam
                                    </span>
                                    <span
                                      title=""
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      อันนี้ steam ผมเองฮะ!
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center rounded-full bg-primary bg-opacity-90 text-xs font-medium text-banner"></div>
                    <div className="mb-4 flex justify-center"></div>
                  </div>
                </div>
                <NowPlaying />
              </div>
            </div>
          </div>
          <div className="mb-4 flex justify-center">
            <div className="flex items-center justify-center rounded-full bg-primary bg-opacity-90 text-xs font-medium text-banner">
              <footer>
                <div className="container mx-auto text-center">
                  Made by Meo☁️
                  <p className="text-gray text-s">
                    © 2025 is Meo.
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}
