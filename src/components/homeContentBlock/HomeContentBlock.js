import "../homeContentBlock/homeContentBlock.scss";

const HomeContentBlock = () => {
  return (
    <div className="container">
      <div className="d-flex blockContent p-3">
        <div className="mx-4">
          <h2 className="text-center">Search for recipes</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* <div>
            <img src="../../../public/assets/images/search.png" alt="..." />
                  </div> */}
        <div className="align-self-center">
          <img
            src="https://esmmweighless.com/wp-content/uploads/2019/12/Carolyn-Cooking-Blog.jpg"
            alt="..."
            className="imgSize p-1"
          />
        </div>
      </div>
      <div className="d-flex blockContent p-3">
        <div className="align-self-center">
          <img
            src="https://esmmweighless.com/wp-content/uploads/2019/12/Carolyn-Cooking-Blog.jpg"
            alt="..."
            className="imgSize p-1"
          />
        </div>
        <div className="mx-4">
          <h2 className="text-center">Filter them ...</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* <div>
            <img src="../../../public/assets/images/search.png" alt="..." />
                  </div> */}
      </div>
      <div className="d-flex blockContent p-3">
        <div className="mx-4">
          <h2 className="text-center">Cook!</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* <div>
            <img src="../../../public/assets/images/search.png" alt="..." />
                  </div> */}
        <div className="align-self-center">
          <img
            src="https://esmmweighless.com/wp-content/uploads/2019/12/Carolyn-Cooking-Blog.jpg"
            alt="..."
            className="imgSize p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContentBlock;
