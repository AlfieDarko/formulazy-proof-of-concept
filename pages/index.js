const Index = () => (
  <>
    <section>
      <form action="/submit">
        <p>Nice Form</p>

        <label htmlFor="name">
          <input name="name" type="text" />
        </label>

        <button type="submit" />
      </form>
      <p>Hello Next.js</p>
    </section>

    <section>
      <button>Return Script</button>
    </section>
  </>
);

export default Index;
