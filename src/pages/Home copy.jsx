import Article from "../components/Article";


export default function Index() {
  return (
    <main>
          <Article date='August' event={'fundraiser'} />
          <Article date='16' event={'Meet'} />
          <Article date='September' event={'First'} />
    </main>
  );
}