import "./CSS//AppHeader.css";

const Header = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();

  return (
    <div>
      <h1 className="AppHeader">
        {year}년 {month + 1}월 {date}일 오늘의 할일📝
      </h1>
    </div>
  );
};

export default Header;
