import Navbar from "../custom components/navbar";
import blogImg from "../assets/dashboard/blog.png";
import storyImg from "../assets/dashboard/story.png";
import postImg from "../assets/dashboard/post.png"

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Welcome to the Blog Hub
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Explore amazing blogs, share your thoughts, and get inspired by
          creative content.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img
              src={postImg}
              alt="Post Blogs"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Start Writing</h2>
              <p className="text-gray-600">
                Create your first blog and share your ideas with the world.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img
              src={blogImg}
              alt="Reading Blogs"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Read Blogs</h2>
              <p className="text-gray-600">
                Explore blogs from different categories and discover new ideas.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img
              src={storyImg}
              alt="Connect"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">About-Story</h2>
              <p className="text-gray-600">
                Share your success story of life goals
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
