import { FC } from "react";
import { useForm } from "@formspree/react";

export const Footer: FC = () => {
  const [state, handleSubmit] = useForm("mzbnzpqr");

  if (state.succeeded) {
    return (
      <h1 className="md:text-5xl/tight my-4 max-w-lg text-4xl font-medium text-white text-center">
        Thanks for contacting Solana Token Creator!
      </h1>
    );
  }

  return (
    <footer className="bg-default-950/40 backdrop-blur-3xl">
      <div className="container py-20 lg:px-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

          {/* ABOUT */}
          <div>
            <h5 className="text-white text-xl font-semibold mb-4">
              Solana Token Creator
            </h5>
            <p className="text-default-300">
              Solana Token Creator is your all-in-one platform to launch, manage, and scale memecoins.
              Built for creators who want fast, secure, and powerful crypto tools.
            </p>
          </div>

          {/* NEWSLETTER */}
          <div>
            <div className="bg-primary/20 rounded-xl p-6">
              <h6 className="mb-4 text-xl text-white">Stay Updated</h6>
              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="email"
                  name="email"
                  required
                  className="bg-default-950/60 h-12 w-full rounded-lg px-4 text-white"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-primary py-3 rounded-lg text-white font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* FINAL FOOTER */}
      <div className="border-t border-white/10 py-6 text-center">
        <p className="text-default-400 text-sm">
          © 2026 Solana Token Creator. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
