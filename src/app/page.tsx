import Link from "next/link";

export default function Home() {
  return (
    <h1 className="font-semibold text-4xl text-blue-500">
      Hello!! Welcome to my Portfolio. Please check my{" "}
      <Link
        href="https://github.com/t123arun"
        className="text-green-700 text-2xl"
      >
        github account....
      </Link>
    </h1>
  );
}
