import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Avatar from "components/Avatar";
import Button from "components/Button";
import GitHub from "components/Icons/GitHub";
import Layout from "components/Layout";
import { colors, fontSizes } from "styles/theme";

import { loginWithGitHub, onGitHubAuthStateChanged } from "../firebase/client";
import Logo from "components/Icons/Logo";

export default function Home() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onGitHubAuthStateChanged(setUser);
  }, []);

  const handleClick = () => {
    loginWithGitHub();
  };

  return (
    <div>
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section>
          <Logo fill={colors.primary} width={120} height={120} />
          <h1>Devter</h1>
          <h2>
            Talk about development <br /> with developers
          </h2>
          <div>
            {user === null && (
              <Button onClick={handleClick}>
                <GitHub width={24} height={24} fill={colors.white} />
                Login with GitHub
              </Button>
            )}

            {Boolean(user) && (
              <div>
                <Avatar
                  src={user.photoURL}
                  alt={"avatar"}
                  text={user.username}
                />
              </div>
            )}
          </div>
        </section>
      </Layout>

      <style jsx>{`
        section {
          display: grid;
          place-items: center;
          place-content: center;
          height: 100%;
        }

        div {
          margin-top: 16px;
        }

        h1 {
          color: ${colors.primary};
          font-weight: 800;
          font-size: ${fontSizes.$4};
          margin-bottom: 16px;
        }

        h2 {
          color: ${colors.secondary};
          font-size: ${fontSizes.$2};
          margin: 0;
        }
      `}</style>
    </div>
  );
}
