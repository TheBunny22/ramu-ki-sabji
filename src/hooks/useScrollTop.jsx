// custom hook for scrolltop 
function useScrollTop() {
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return { scrollTop };
}

export default useScrollTop;
