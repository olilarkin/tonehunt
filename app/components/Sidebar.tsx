import { StarIcon, UserCircleIcon, UserIcon, RectangleStackIcon } from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";
import type { User } from "@supabase/supabase-js";
import { map } from "lodash";
import imgArticle1 from "~/assets/articles/article_1.jpg";
import imgArticle2 from "~/assets/articles/article_2.jpg";
import imgArticle3 from "~/assets/articles/article_3.jpg";

type SidebarProps = {
  user?: User | null | undefined;
  username?: string | null | undefined;
};

const Sidebar = ({ user, username }: SidebarProps) => {
  const UserBlock = () => {
    return (
      <div className="w-full">
        <div className="flex flex-row mb-6 items-center">
          <UserIcon className="block w-11 h-11 rounded-full p-2 bg-tonehunt-green mr-4" />
          <h3 className="font-satoshi-bold text-lg">{username}</h3>
        </div>
        <div className="flex flex-col">
          <div className="flex-1 border-b border-gray-600 pb-3 mb-3">
            <div className="flex flex-row items-center">
              <Link to="/account/my-models" prefetch="intent" className="hover:underline">
                <RectangleStackIcon className="inline w-5 h-5  mr-2" />
                <span className="font-satoshi-regular text-sm">My models</span>
              </Link>
            </div>
          </div>
          <div className="flex-1 border-b border-gray-600 pb-3 mb-3">
            <div className="flex flex-row items-center">
              <Link to="#" prefetch="intent" className="hover:underline">
                <StarIcon className="inline w-5 h-5 mr-2" />
                <span className="font-satoshi-regular text-sm">My favorites</span>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-row items-center">
              <Link to={`/${username}`} prefetch="intent" className="hover:underline">
                <UserCircleIcon className="inline w-5 h-5 mr-2" />
                <span className="font-satoshi-regular text-sm">View Profile</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TagsBlock = () => {
    const tagList = [
      "rock",
      "metal",
      "vintage",
      "marshall",
      "mesa",
      "evh",
      "high gain",
      "distortion",
      "fender",
      "clean",
    ];
    return (
      <div className="w-full">
        <div className="flex">
          <h1 className="font-satoshi-bold text-xl mb-4">Popular tags</h1>
        </div>
        <div className="flex flex-row flex-wrap">
          {map(tagList, (tag) => (
            <div key={tag} className="px-3 py-1 mr-2 mb-2 border border-gray-600 rounded-full">
              #{tag}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ArticlesBlock = () => {
    return (
      <div className="w-full">
        <div className="flex">
          <h1 className="font-satoshi-bold text-xl mb-4">Tips &amp; Tricks</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex-1 border-b border-gray-600 pb-3 mb-3">
            <a href="https://github.com/sdatkinson/neural-amp-modeler" target="_new">
              <div className="flex flex-row items-center">
                <div className="inline w-14 h-14 mr-2 bg-tonehunt-purple rounded-xl overflow-hidden flex-none">
                  <img
                    className="object-cover w-14 h-14"
                    src={imgArticle1}
                    alt="capture_image"
                    title="How to capture your own rig"
                  />
                </div>
                <span className="font-satoshi-bold text-sm">How to capture your own rig</span>
              </div>
            </a>
          </div>
          <div className="flex-1 border-b border-gray-600 pb-3 mb-3">
            <a href="https://github.com/sdatkinson/neural-amp-modeler" target="_new">
              <div className="flex flex-row items-center">
                <div className="inline w-14 h-14 mr-2 bg-tonehunt-orange rounded-xl overflow-hidden flex-none">
                  <img
                    className="object-cover w-14 h-14"
                    src={imgArticle2}
                    alt="train_image"
                    title="How to train a model"
                  />
                </div>
                <span className="font-satoshi-bold text-sm">How to train a model</span>
              </div>
            </a>
          </div>
          <div className="flex-1 border-b border-gray-600 pb-3 mb-3">
            <a href="https://github.com/sdatkinson/NeuralAmpModelerPlugin" target="_new">
              <div className="flex flex-row items-center">
                <div className="inline w-14 h-14 mr-2 bg-tonehunt-green rounded-xl overflow-hidden flex-none">
                  <img className="object-cover w-14 h-14" src={imgArticle3} alt="nam_image" title="Download NAM" />
                </div>
                <span className="font-satoshi-bold text-sm">Download the Neural Amp Modeling Plugin</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full p-4">
      {user?.id ? (
        <div className="w-full text-white rounded-xl p-4 mb-8 border border-gray-600">
          <UserBlock />
        </div>
      ) : null}
      <div className="w-full text-white mb-8">
        <TagsBlock />
      </div>
      <div className="w-full text-white mb-8">
        <ArticlesBlock />
      </div>
    </div>
  );
};

export default Sidebar;