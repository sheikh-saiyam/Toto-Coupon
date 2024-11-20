const ExtraSection = () => {
  return (
    <div className="mt-24">
      <div>
        <h1 className="text-center px-4 text-4xl font-extrabold mb-8 tracking-widest flex gap-1 items-center justify-center">
          Why Choose Us
        </h1>
      </div>
      <div className="border-2 rounded-xl p-4">
        <div>
          <img
            draggable="false"
            className="w-full select-none"
            src="https://i.ibb.co.com/bKjmp8c/Untitled-Project-5.jpg"
            alt=""
          />
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="mt-24">
        {/* faq section */}
        <div id="faq">
          <h1 className="text-center text-5xl font-extrabold tracking-widest flex gap-1 items-center justify-center ">
            FAQ <p className="animate-bounce">❓</p>
          </h1>
          {/* main div  */}
          <div className="mt-8 join join-vertical">
            <div className="collapse collapse-arrow bg-white border-2 join-item">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What is toto-Coupon?
              </div>
              <div className="collapse-content">
                <p>
                  Welcome to totoCouponbd — Your One-Stop Hub for Amazing Deals
                  and Unbeatable Discounts! 🚀 At totoCouponbd, we take the
                  hassle out of saving money by bringing you the most exclusive
                  coupons and jaw-dropping offers for products and services you
                  love. Whether you’re shopping for gadgets, fashion, food, or
                  travel, we ensure you get the best bang for your buck. Our
                  platform is designed to make your shopping experience smarter,
                  faster, and more rewarding. With totoCouponbd, saving is not
                  just easy — it’s effortless!
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white border-2 join-item">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                How can I use a coupon?
              </div>
              <div className="collapse-content">
                <ul className="list-disc ml-5 space-y-2 font-semibold text-gray-700">
                  <li>Browse the coupons available on our platform.</li>
                  <li>Click on the coupon you want to use.</li>
                  <li>Copy the code or follow the link provided.</li>
                  <li>Copy the code or follow the link provided.</li>
                </ul>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white border-2 join-item">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Are the coupons free to use?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, all the coupons on totoCouponbd are completely free to
                  use. We strive to bring you the best deals without any extra
                  cost.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white border-2 join-item">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                How often are coupons updated?
              </div>
              <div className="collapse-content">
                <p>
                  We update our coupons daily to ensure you always get access to
                  the latest and most active deals.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white border-2 join-item">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Can I submit my own coupons?
              </div>
              <div className="collapse-content">
                <p>
                  Absolutely! If you have a coupon you’d like to share, please
                  contact us or use the submission form available on our
                  website. We’ll review and add it to our platform.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white border-2 join-item">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Why is my coupon not working?
              </div>
              <div className="collapse-content">
                <p>
                  Ensure the coupon code is entered correctly. Check if the
                  coupon has expired or has specific terms and conditions. If
                  you continue to face issues, please contact us for assistance.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white border-2 join-item">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
              Is totoCouponbd available on mobile devices?
              </div>
              <div className="collapse-content">
                <p>
              Yes, our platform is fully responsive and works seamlessly on mobile devices, tablets, and desktops.
                </p>
              </div>
            </div>
          </div>
          {/* main div  */}
        </div>
        {/* faq section */}
      </div>
      {/* FAQ SECTION */}
    </div>
  );
};

export default ExtraSection;
