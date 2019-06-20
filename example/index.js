// import AlaxSdk from "../lib"

const AlaxSdk = AlaxSDK.default;

const iapApiKey = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjQsInN1YiI6ImZGR0FJMFluTDJoY2xFZ01QZkltQ2c9PSIsInBvb2wiOiJhcHAta2V5cyIsInNjb3BlIjoiYWxsIiwiaWF0IjoxNTU0ODc5ODkzLCJleHAiOjE1ODY0MTU4OTMsImF1ZCI6ImFsYXguaW8iLCJpc3MiOiJhbGF4LmlvIn0.vr8lz9uyM6mNs4pLgxEKA9N00GiE3_N25yBjUTdfwm6Wv1UqNQaC9m6-OwVHoMVJt_WbpViCvn1AtrhxkNAPzA";

(function init() {
    const alaxSDKClient = new AlaxSdk(iapApiKey);
    initIap(alaxSDKClient);
})();

function initIap(alaxSDKClient) {
    const $iapWrap = document.getElementsByClassName("js-iap-wrap");
    $iapWrap[0].addEventListener("click", handleIapClick, true)

    const loader = loaderHandlers();

    function handleIapClick(e) {
        if (e.target.hasAttribute("data-iap")) {
            loader.show();
            const iapPrice = e.target.getAttribute("data-price");
            alaxSDKClient.transactionApi.getFee()
                .then((res) => {
                    const confirmRes = confirm(`Confirm purchasing: ${iapPrice}AIA with ${res.data.fee}AIA transfer fee`);
                    return Promise.resolve({ confirmRes, fee: res.data.fee });
                })
                .then(({ confirmRes, fee }) => {
                    if (confirmRes) {
                        return alaxSDKClient.productApi.purchaseInAppItem(iapPrice, fee)
                    }
                    return Promise.reject("Cancelled")
                })
                .catch(console.log)
                .finally(loader.hide)
        }
        e.stopPropagation();
    }
}

function loaderHandlers() {
    const $loaderWrapper = document.getElementsByClassName("js-loader-wrapper")[0];

    return {
        show: () => {
            $loaderWrapper.classList.remove("hidden");
        },
        hide: () => {
            $loaderWrapper.classList.add("hidden");
        }
    }
}
