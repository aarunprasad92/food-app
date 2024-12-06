'use client';

const Error = async ({error}) => {
  return (
    <main className="error">
      <h1>An Error occured!</h1>
      <p>Failed to fetch meal data. Try again later</p>
    </main>
  );
};


export default Error;