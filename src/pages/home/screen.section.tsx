import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import BackgroundEffect from "@/common/components/BackgroundEffect";
import ContentWrapper from "@/common/components/ContentWrapper";
import HeroBackground from "./hero-section/components/HeroBackground";

export default function ScreenSection() {
  const [showCode, setShowCode] = useState(false);
  const [selectedScreen, setSelectedScreen] = useState(0);

  const screens = [
    {
      id: 1,
      title: "Social Feed",
      image:
        "https://cdn.dribbble.com/users/1615584/screenshots/15571949/media/7e95f0fddb7957220033569815149bca.jpg",
      code: `
// Social Feed Screen
class SocialFeedScreen extends StatelessWidget {
  @override 
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView.builder(
        itemBuilder: (context, index) {
          return PostCard(
            username: "John Doe",
            imageUrl: "post_image.jpg",
            likes: 234,
            comments: 45
          );
        }
      ),
    );
  }
}`,
    },
    {
      id: 2,
      title: "E-Commerce",
      image:
        "https://cdn.dribbble.com/users/4189231/screenshots/17343305/media/202173138f9504c2eacd16e70698312c.png",
      code: `
// E-Commerce Screen  
class ProductScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: GridView.builder(
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          childAspectRatio: 0.7
        ),
        itemBuilder: (context, index) {
          return ProductCard(
            name: "Cool Sneakers",
            price: "\$99.99",
            image: "product.jpg"
          );
        }
      ),
    );
  }
}`,
    },
    {
      id: 3,
      title: "Profile",
      image:
        "https://cdn.dribbble.com/users/2564256/screenshots/15797905/media/26764c3ff3ea4b393b657edab64d8553.png",
      code: `
// Profile Screen
class ProfileScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          ProfileHeader(
            avatar: "avatar.jpg",
            name: "Jane Smith",
            bio: "Flutter Developer"
          ),
          ProfileStats(
            posts: 245,
            followers: 15.3k,
            following: 420
          ),
          ProfileGallery()
        ]
      ),
    );
  }
}`,
    },
    {
      id: 4,
      title: "Chat App",
      image:
        "https://cdn.dribbble.com/users/1615584/screenshots/15571949/media/7e95f0fddb7957220033569815149bca.jpg",
      code: `
// Chat Screen
class ChatScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          ChatHeader(
            title: "Messages",
            onlineUsers: 5
          ),
          Expanded(
            child: ListView.builder(
              itemBuilder: (context, index) {
                return ChatBubble(
                  message: "Hey, how are you?",
                  time: "2:30 PM",
                  isMe: true
                );
              }
            )
          ),
          MessageInput()
        ]
      ),
    );
  }
}`,
    },
  ];

  return (
    <section className="py-20 bg-[#0B1120] relative">
      {/* Background effects */}
      {/* <BackgroundEffect /> */}
      <HeroBackground />

      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 text-sm font-medium tracking-wide backdrop-blur-sm border border-blue-500/30 shadow-lg shadow-blue-500/10">
            Beautiful UI Screens
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            <span className="block text-white">Stunning Flutter</span>
            <span className="block mt-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Screen Designs
            </span>
          </h2>
        </motion.div>

        <div className="flex items-center justify-center gap-8 flex-wrap">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Mobile frame */}
              <div className="w-[320px] h-[580px] bg-slate-900 rounded-[3rem] p-3 border-[14px] border-slate-800 shadow-2xl shadow-blue-500/10 relative">
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Screen label */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full">
                    <span className="text-white text-sm font-medium">
                      {screen.title}
                    </span>
                  </div>

                  {/* View Code Button - Shows on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => {
                        setSelectedScreen(index);
                        setShowCode(true);
                      }}
                      className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
                    >
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <AnimatePresence>
            {showCode && (
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-slate-900/95 backdrop-blur shadow-2xl overflow-y-auto z-50"
              >
                {/* Close button */}
                <button
                  onClick={() => setShowCode(false)}
                  className="absolute top-4 right-4 text-white/60 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Preview section */}
                <div className="p-6 border-b border-slate-700/50">
                  <div className="w-[200px] h-[400px] mx-auto bg-slate-900 rounded-[2rem] p-3 border-[10px] border-slate-800">
                    <div className="h-full w-full rounded-[1.5rem] overflow-hidden">
                      <img
                        src={screens[selectedScreen].image}
                        alt={screens[selectedScreen].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Code section with tabs */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(
                          screens[selectedScreen].code
                        )
                      }
                      className="px-3 py-1 text-sm text-white/60 hover:text-white border border-white/20 rounded-md"
                    >
                      Copy Code
                    </button>
                  </div>
                  <SyntaxHighlighter
                    language="dart"
                    style={atomDark}
                    customStyle={{
                      background: "transparent",
                      padding: "1rem",
                      margin: 0,
                      borderRadius: "0.5rem",
                    }}
                  >
                    {screens[selectedScreen].code}
                  </SyntaxHighlighter>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ContentWrapper>
    </section>
  );
}
