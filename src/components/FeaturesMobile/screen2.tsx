function Screen2() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="/images/features/feature2.png" alt="feature2" loading="lazy"/>
      <div className="px-4 mt-[32px]">
        <h1 className="text-[30px]  font-bold">
          One-click community onboarding
        </h1>
        <p className="text-[18px] font-normal leading-[30px]">
          Users now have to hop between multiple platforms to access the full
          offerings of a community.
        </p>
        <p>
          Community members on TowneSquare can access community servers with
          their token or NFT in just one-click. It also allows non-token
          communities to be created with the same full suite of features from
          governance to townhall spaces.
        </p>
      </div>
    </div>
  );
}

export default Screen2;
