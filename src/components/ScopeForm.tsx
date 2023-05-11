const ScopeForm = () => {
  return (
    <form className="flex flex-col w-full h-screen my-10 overflow-y-auto max-h-[10000px] space-y-20 scrollbar-thin scrollbar-thumb-zinc-200">
      <div className="flex w-full px-20 items-start justify-between">
        <div className="w-2/4">
          <h1>Drag a scope item into the box </h1>
        </div>
        <div className="w-2/4 text-center">
          <h1>Scope List</h1>
          <div></div>
        </div>
      </div>
    </form>
  );
};

export default ScopeForm;
