export default function CategorySkeletonLoader() {
  // const data = [0,1,2,3,4]
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="h-10 w-full rounded-lg bg-gray-200 animate-pulse"
        ></div>
      ))}
    </>
  );
}
