import styles, { globalStyles } from "./styles";

function Layout({ children }) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>

      <style jsx>{styles}</style>

      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
}

export default Layout;
