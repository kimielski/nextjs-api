export default function Footer() {
  return (
    <>
      <footer className="bg-gray-50 text-gray-700">
        <div className="footer-dark">
          <div className="container xl:max-w-6xl mx-auto px-4 py-4 border-t border-gray-200 border-opacity-10">
            <div className="row">
              <div className="col-12 col-md text-center">
                <p className="d-block my-3">
                  ©TestApp@{new Date().getFullYear()} | All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
