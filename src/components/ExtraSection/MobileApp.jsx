const MobileApp = () => {
  return (
    <div>
      <section className="bg-gradient-to-r rounded-xl to-secondary from-primary py-10 text-white">
        <div className="mx-auto w-11/12 md:w-10/12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Get Our Mobile App 📱
              </h2>
              <p className="text-lg mb-6 font-semibold sm:hidden block">
                Discover exclusive coupons and discounts right at your
                fingertips. Unlock exclusive deals and discounts on the go with
                the ToTO-Coupon mobile app! Seamlessly browse a wide range of{" "}
                <span
                  title="promotions, from local favorites to global brands. Enjoy instant access to your favorite coupons, save your best offers ...
for later, and get notifications for new discounts tailored to your preferences. Download the ToTOCoupon app today to start saving, anytime and anywhere! Scan the QR code to download the app and start saving today!"
                >
                  read more...
                </span>
              </p>
              <p className="text-lg mb-6 font-semibold hidden sm:block">
                Discover exclusive coupons and discounts right at your
                fingertips. Unlock exclusive deals and discounts on the go with
                the ToTO-Coupon mobile app! Seamlessly browse a wide range of
                promotions, from local favorites to global brands. Enjoy instant
                access to your favorite coupons, save your best offers ...{" "}
                <span
                  title="
                for later, and get notifications for new discounts tailored to your
                preferences. Download the ToTOCoupon app today to start
                saving, anytime and anywhere! Scan the QR code to download the
                app and start saving today!"
                  className="block lg:hidden"
                >
                  read more ....
                </span>{" "}
                <span className="hidden lg:block">
                  {" "}
                  for later, and get notifications for new discounts tailored to
                  your preferences. Download the ToTOCoupon app today to start
                  saving, anytime and anywhere! Scan the QR code to download the
                  app and start saving today!
                </span>
              </p>
              <button className="btn btn-wide bg-white text-lg font-semibold text-green-600 border-green-600 border-2">
                Download Now
              </button>
            </div>

            {/* QR Code and Mobile Image */}
            <div className="flex items-center justify-center ">
              {/* Mobile Image */}
              <div className="">
                <div className="">
                  <div className="mockup-phone ">
                    <div className="camera"></div>
                    <div className="display bg-white">
                      <div className="artboard artboard-demo w-full h-full py-14 sm:py-0 sm:phone-1 flex flex-col items-center justify-center text-center p-4 bg-white">
                        <div>
                          <h1 className="text-black text-4xl font-bold mb-2">
                            {" "}
                            ToTo-Coupon
                          </h1>
                          <h1 className="text-gray-700 text-2xl mb-2">
                            Scan the QR code to download the app
                          </h1>
                          <img
                            src="https://i.ibb.co.com/LvZLN6N/qrcode-localhost.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApp;
