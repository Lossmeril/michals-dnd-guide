import { PageLayout } from "@/components/layouts/base";

const DevTestPage = () => {
  return (
    <PageLayout>
      <div className="book">
        <h1>Michal&apos;s D&amp;D Guide</h1>
        <p>Choose what you want to do.</p>

        <h2>About this app</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam sit
          amet magna in magna gravida vehicula. In rutrum. Etiam posuere lacus
          quis dolor. Mauris elementum mauris vitae tortor. Duis ante orci,
          molestie vitae vehicula venenatis, tincidunt ac pede. In rutrum. Etiam
          egestas wisi a erat. <a href="#">Proin mattis lacinia justo.</a>{" "}
          Quisque porta. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Duis viverra diam
          non justo. Mauris elementum mauris vitae tortor. Fusce tellus. Etiam
          quis quam. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Aliquam erat volutpat.
        </p>
        <h3>Subheading Example</h3>
        <p>
          Aenean placerat. Donec quis nibh at felis congue commodo. Aliquam erat
          volutpat. Maecenas libero. Aenean placerat. Maecenas sollicitudin.
          Pellentesque sapien. Quis autem vel eum iure reprehenderit qui in ea
          voluptate velit esse quam nihil molestiae consequatur, vel illum qui
          dolorem eum fugiat quo voluptas nulla pariatur? Etiam dui sem,
          fermentum vitae, sagittis id, malesuada in, quam. Aliquam erat
          volutpat. Integer tempor. Suspendisse nisl. Mauris dictum facilisis
          augue. Nulla est.
        </p>
      </div>
    </PageLayout>
  );
};

export default DevTestPage;
