import { Link } from "react-router-dom";
import classes from "./TopNews.module.css";
import YouTube from "react-youtube";
import topnews from "../../model/topnews";
import { useQuery } from "@tanstack/react-query";
import { fetchVideoTopNews } from "../../http/moveis";
import { ThreeDots } from "react-loader-spinner";
import { FaRegClock } from "react-icons/fa";
import { opts, sideopts } from "../../constant/videosOTP";
const TopNews: React.FC<topnews> = (props) => {
  const { data, isLoading } = useQuery<topnews[]>({
    queryKey: ["topnews"],
    queryFn: () => fetchVideoTopNews(),
  });

  const styles = {
    display: "flex",
    flexDirection: props.horizon,
   
    gap: props.gap,
    paddingLeft: "2rem",
    width: "100%",
  };
  let content;

  if (isLoading) {
    content = (
      <ThreeDots
        height="80"
        width="50"
        radius="9"
        color="red"
        ariaLabel="three-dots-loading"
        visible={isLoading}
      />
    );
  }

  if (data) {
    content = data.map((item) => {
      const publishedDate = new Date(item.published_at!);
      const convertDate = publishedDate.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      return (
        <div className={classes.topNews}>
          <div className={classes.custom_SideYouTube}>
            <YouTube opts={sideopts} videoId={item.key} />
          </div>
          <div className={classes.content_topNews}>
            <div className={classes.date}>
              <FaRegClock size={15} color="red" />
              <p>{convertDate}</p>
            </div>
            <span>{item.name}</span>
          </div>
        </div>
      );
    });
  }

  return (
    <div className={classes.container_topNews}>
      <h2>Top News</h2>
      <div className={classes.wrap_topNews}>
        <div style={styles}>
          <div className={classes.custom_youtube}>
            <YouTube videoId="k397HRbTtWI" />
          </div>
          <div className={classes.side_topNews}>{content}</div>
        </div>
      </div>
    </div>
  );
};
export default TopNews;
