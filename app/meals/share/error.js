'use client';

const Error = async ({error}) => {
  return (
    <main className="error">
      <h1>An Error occured!</h1>
      <p>Failed to create a meal</p>
    </main>
  );
};


export default Error;