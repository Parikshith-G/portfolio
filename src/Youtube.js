// import React, { useEffect, useState, useRef } from "react";

// export default function TopVideos() {
//   const [videos, setVideos] = useState([]);
//   const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
//   const CHANNEL_ID = process.env.REACT_APP_YOUTUBE_CHANNEL_KEY;

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const fetchTopVideos = async () => {
//       try {
//         // Fetching logic unchanged
//         const channelRes = await fetch(
//           `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
//         );
//         const channelData = await channelRes.json();
//         const uploadsId =
//           channelData.items[0].contentDetails.relatedPlaylists.uploads;

//         let videoIds = [];
//         let nextPageToken = "";
//         while (true) {
//           const playlistRes = await fetch(
//             `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=50&pageToken=${nextPageToken}&key=${API_KEY}`
//           );
//           const playlistData = await playlistRes.json();

//           playlistData.items.forEach((item) => {
//             videoIds.push(item.snippet.resourceId.videoId);
//           });

//           if (playlistData.nextPageToken) {
//             nextPageToken = playlistData.nextPageToken;
//           } else {
//             break;
//           }
//         }

//         let allStats = [];
//         for (let i = 0; i < videoIds.length; i += 50) {
//           const batch = videoIds.slice(i, i + 50).join(",");
//           const statsRes = await fetch(
//             `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${batch}&key=${API_KEY}`
//           );
//           const statsData = await statsRes.json();
//           allStats.push(...statsData.items);
//         }

//         const topVideos = allStats
//           .filter((v) => v.statistics?.viewCount)
//           .sort(
//             (a, b) =>
//               parseInt(b.statistics.viewCount) -
//               parseInt(a.statistics.viewCount)
//           )
//           .slice(0, 3);

//         setVideos(topVideos);
//       } catch (err) {
//         console.error("Error fetching top videos", err);
//       }
//     };

//     fetchTopVideos();
//   }, [API_KEY, CHANNEL_ID]);

//   // Close dropdown if click/mouse leaves dropdown area
//   // const handleMouseLeave = (e) => {
//   const handleMouseLeave = (e) => {
//     const related = e.relatedTarget;

//     // Check if related is a DOM Node before calling contains
//     const isNode = related instanceof Node;

//     if (
//       dropdownRef.current &&
//       (!related || !isNode || !dropdownRef.current.contains(related))
//     ) {
//       setIsDropdownOpen(false);
//     }
//   };

//   return (
//     <>
//       <div
//         className="deck-card"
//         style={{
//           width: "300px",
//           height: "180px",
//           margin: "20px",
//           cursor: "pointer",
//           border: "1px solid #ccc",
//           borderRadius: "8px",
//           boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
//           padding: "12px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           background: "#2c2c2c",
//           userSelect: "none",
//         }}
//         onMouseEnter={() => setIsDropdownOpen(true)}
//         onMouseLeave={(e) => {
//           // Delay the close only if mouse not entering dropdown
//           if (
//             dropdownRef.current &&
//             !dropdownRef.current.contains(e.relatedTarget)
//           ) {
//             setIsDropdownOpen(false);
//           }
//         }}
//       >
//         <h4 style={{ margin: 0 }}>Top Videos</h4>
//         <p style={{ marginTop: 6, fontSize: "14px", color: "#666" }}>
//           A quick look at my 3 most popular uploads
//         </p>
//       </div>

//       {/* {true && ( */}
//       {isDropdownOpen && (
//         <div
//           className="bg-dark"
//           ref={dropdownRef}
//           onMouseLeave={handleMouseLeave}
//           style={{
//             position: "fixed",
//             top: "30vh",
//             left: "50%",
//             transform: "translateX(-50%)",
//             width: "90vw",
//             height: "35vh",
//             background: "white",
//             boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
//             borderRadius: "8px",
//             zIndex: 9999,
//             display: "flex",
//             flexDirection: "column", // change to column to stack videos and link vertically
//             justifyContent: "space-between", // space between videos and link
//             alignItems: "center",
//             padding: "10px",
//             overflow: "hidden",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-around",
//               alignItems: "center",
//               width: "100%",
//               flex: 1, // take available space for videos
//             }}
//           >
//             {videos.length === 0 ? (
//               <p>Loading videos...</p>
//             ) : (
//               (() => {
//                 // Sort and reorder videos: [2nd highest, highest, 3rd highest]
//                 const topThreeVideos = [...videos]
//                   .sort(
//                     (a, b) =>
//                       parseInt(b.statistics.viewCount) -
//                       parseInt(a.statistics.viewCount)
//                   )
//                   .slice(0, 3);
//                 let orderedVideos = topThreeVideos;
//                 if (topThreeVideos.length === 3) {
//                   orderedVideos = [
//                     topThreeVideos[1],
//                     topThreeVideos[0],
//                     topThreeVideos[2],
//                   ];
//                 }
//                 return orderedVideos.map((video, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       flex: "1 1 30%",
//                       margin: "0 10px",
//                       borderRadius: "6px",
//                       overflow: "hidden",
//                       boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
//                       display: "flex",
//                       flexDirection: "column",
//                     }}
//                   >
//                     <iframe
//                       width="100%"
//                       height="70%"
//                       src={`https://www.youtube.com/embed/${video.id}`}
//                       title={video.snippet.title}
//                       allowFullScreen
//                       style={{ border: "none" }}
//                     ></iframe>
//                     <div style={{ padding: "8px" }}>
//                       <h5 style={{ margin: "0 0 4px", fontSize: "1rem" }}>
//                         {video.snippet.title}
//                       </h5>
//                       <p
//                         style={{
//                           margin: 0,
//                           fontSize: "0.85rem",
//                           color: "#555",
//                         }}
//                       >
//                         Views:{" "}
//                         {parseInt(video.statistics.viewCount).toLocaleString()}
//                       </p>
//                     </div>
//                   </div>
//                 ));
//               })()
//             )}
//           </div>

//           {

//             <div
//               style={{ marginTop: "12px", textAlign: "center", width: "100%" }}
//             >
//               <a
//                 href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: "8px",
//                   backgroundColor: "#FF0000",
//                   color: "#fff",
//                   fontWeight: "700",
//                   fontSize: "1.2rem",
//                   padding: "10px 20px",
//                   borderRadius: "30px",
//                   textDecoration: "none",
//                   boxShadow: "0 4px 12px rgba(255, 0, 0, 0.5)",
//                   transition:
//                     "background-color 0.3s ease, box-shadow 0.3s ease",
//                   userSelect: "none",
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.backgroundColor = "#cc0000";
//                   e.currentTarget.style.boxShadow =
//                     "0 6px 16px rgba(204, 0, 0, 0.7)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.backgroundColor = "#FF0000";
//                   e.currentTarget.style.boxShadow =
//                     "0 4px 12px rgba(255, 0, 0, 0.5)";
//                 }}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   height="24"
//                   width="24"
//                   fill="white"
//                   viewBox="0 0 24 24"
//                   style={{ display: "inline-block" }}
//                   aria-hidden="true"
//                   focusable="false"
//                 >
//                   <path d="M19.615 3.184A2.997 2.997 0 0017.408 2H6.592a2.997 2.997 0 00-2.206 1.184 31.188 31.188 0 00-1.645 4.05C2.351 9.997 2.351 12 2.351 12s0 2.003.39 4.765a31.09 31.09 0 001.645 4.05A2.997 2.997 0 006.592 22h10.816a2.997 2.997 0 002.206-1.184 31.188 31.188 0 001.645-4.05c.39-2.762.39-4.765.39-4.765s0-2.003-.39-4.765a31.188 31.188 0 00-1.645-4.05zM10 15.5v-7l6 3.5-6 3.5z" />
//                 </svg>
//                 Visit My YouTube Channel
//               </a>
//             </div>
//           }
//         </div>
//       )}
//     </>
//   );
// }

// import React, { useEffect, useState, useRef } from "react";

// export default function TopVideos({ isDropdownOpen }) {
//   const [videos, setVideos] = useState([]);
//   const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
//   const CHANNEL_ID = process.env.REACT_APP_YOUTUBE_CHANNEL_KEY;

//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const fetchTopVideos = async () => {
//       try {
//         const channelRes = await fetch(
//           `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
//         );
//         const channelData = await channelRes.json();
//         const uploadsId =
//           channelData.items[0].contentDetails.relatedPlaylists.uploads;

//         let videoIds = [];
//         let nextPageToken = "";
//         while (true) {
//           const playlistRes = await fetch(
//             `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=50&pageToken=${nextPageToken}&key=${API_KEY}`
//           );
//           const playlistData = await playlistRes.json();

//           playlistData.items.forEach((item) => {
//             videoIds.push(item.snippet.resourceId.videoId);
//           });

//           if (playlistData.nextPageToken) {
//             nextPageToken = playlistData.nextPageToken;
//           } else {
//             break;
//           }
//         }

//         let allStats = [];
//         for (let i = 0; i < videoIds.length; i += 50) {
//           const batch = videoIds.slice(i, i + 50).join(",");
//           const statsRes = await fetch(
//             `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${batch}&key=${API_KEY}`
//           );
//           const statsData = await statsRes.json();
//           allStats.push(...statsData.items);
//         }

//         const topVideos = allStats
//           .filter((v) => v.statistics?.viewCount)
//           .sort(
//             (a, b) =>
//               parseInt(b.statistics.viewCount) -
//               parseInt(a.statistics.viewCount)
//           )
//           .slice(0, 3);

//         setVideos(topVideos);
//       } catch (err) {
//         console.error("Error fetching top videos", err);
//       }
//     };

//     fetchTopVideos();
//   }, [API_KEY, CHANNEL_ID]);

//   const handleMouseLeave = (e) => {
//     const related = e.relatedTarget;
//     const isNode = related instanceof Node;

//     // if (
//     //   dropdownRef.current &&
//     //   (!related || !isNode || !dropdownRef.current.contains(related))
//     // ) {
//     //   setIsDropdownOpen(false);
//     // }
//   };

//   return (
//     <>
//       <div
//         className="deck-card"
//         style={{
//           width: "300px",
//           height: "180px",
//           margin: "20px",
//           cursor: "pointer",
//           border: "1px solid #ccc",
//           borderRadius: "8px",
//           boxShadow: isDropdownOpen
//             ? "0 8px 16px rgba(0,0,0,0.3)"
//             : "0 2px 8px rgba(0,0,0,0.15)",
//           padding: "12px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           background: isDropdownOpen ? "#1a1a1a" : "#2c2c2c",
//           color: isDropdownOpen ? "white" : "#ddd",
//           userSelect: "none",
//           transition: "all 0.3s ease",
//           position: "relative",
//         }}
//         // onMouseEnter={() => setIsDropdownOpen(true)}
//         // onMouseLeave={(e) => {
//         //   if (
//         //     dropdownRef.current &&
//         //     !dropdownRef.current.contains(e.relatedTarget)
//         //   ) {
//         //     setIsDropdownOpen(false);
//         //   }
//         // }}
//       >
//         <h4 style={{ margin: 0, userSelect: "none" }}>
//           Top Videos on My Channel
//         </h4>
//         <p
//           style={{
//             marginTop: 6,
//             fontSize: "14px",
//             color: isDropdownOpen ? "#bbb" : "#999",
//             userSelect: "none",
//           }}
//         >
//           Hover to preview my 3 most popular uploads
//         </p>

//         {/* Down arrow icon */}
//         <div style={{ marginTop: 8 }}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="24"
//             width="24"
//             fill={isDropdownOpen ? "white" : "#999"}
//             viewBox="0 0 24 24"
//           >
//             <path d="M7 10l5 5 5-5H7z" />
//           </svg>
//         </div>
//       </div>

//       {isDropdownOpen && (
//         <div
//           className="bg-dark"
//           ref={dropdownRef}
//           onMouseLeave={handleMouseLeave}
//           style={{
//             position: "fixed",
//             top: "30vh",
//             left: "50%",
//             transform: "translateX(-50%)",
//             width: "90vw",
//             height: "35vh",
//             background: "white",
//             boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
//             borderRadius: "8px",
//             zIndex: 9999,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             alignItems: "center",
//             padding: "10px",
//             overflow: "hidden",
//             animation: "fadeIn 0.3s ease",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-around",
//               alignItems: "center",
//               width: "100%",
//               flex: 1,
//             }}
//           >
//             {videos.length === 0 ? (
//               <p>Loading videos...</p>
//             ) : (
//               (() => {
//                 const topThreeVideos = [...videos]
//                   .sort(
//                     (a, b) =>
//                       parseInt(b.statistics.viewCount) -
//                       parseInt(a.statistics.viewCount)
//                   )
//                   .slice(0, 3);
//                 let orderedVideos = topThreeVideos;
//                 if (topThreeVideos.length === 3) {
//                   orderedVideos = [
//                     topThreeVideos[1],
//                     topThreeVideos[0],
//                     topThreeVideos[2],
//                   ];
//                 }
//                 return orderedVideos.map((video, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       flex: "1 1 30%",
//                       margin: "0 10px",
//                       borderRadius: "6px",
//                       overflow: "hidden",
//                       boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
//                       display: "flex",
//                       flexDirection: "column",
//                     }}
//                   >
//                     <iframe
//                       width="100%"
//                       height="70%"
//                       src={`https://www.youtube.com/embed/${video.id}`}
//                       title={video.snippet.title}
//                       allowFullScreen
//                       style={{ border: "none" }}
//                     ></iframe>
//                     <div style={{ padding: "8px" }}>
//                       <h5 style={{ margin: "0 0 4px", fontSize: "1rem" }}>
//                         {video.snippet.title}
//                       </h5>
//                       <p
//                         style={{
//                           margin: 0,
//                           fontSize: "0.85rem",
//                           color: "#555",
//                         }}
//                       >
//                         Views:{" "}
//                         {parseInt(video.statistics.viewCount).toLocaleString()}
//                       </p>
//                     </div>
//                   </div>
//                 ));
//               })()
//             )}
//           </div>

//           <div
//             style={{ marginTop: "12px", textAlign: "center", width: "100%" }}
//           >
//             <a
//               href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: "8px",
//                 backgroundColor: "#FF0000",
//                 color: "#fff",
//                 fontWeight: "700",
//                 fontSize: "1.2rem",
//                 padding: "10px 20px",
//                 borderRadius: "30px",
//                 textDecoration: "none",
//                 boxShadow: "0 4px 12px rgba(255, 0, 0, 0.5)",
//                 transition: "background-color 0.3s ease, box-shadow 0.3s ease",
//                 userSelect: "none",
//                 cursor: "pointer",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = "#cc0000";
//                 e.currentTarget.style.boxShadow =
//                   "0 6px 16px rgba(204, 0, 0, 0.7)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = "#FF0000";
//                 e.currentTarget.style.boxShadow =
//                   "0 4px 12px rgba(255, 0, 0, 0.5)";
//               }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 height="24"
//                 width="24"
//                 fill="white"
//                 viewBox="0 0 24 24"
//                 style={{ display: "inline-block" }}
//                 aria-hidden="true"
//                 focusable="false"
//               >
//                 <path d="M19.615 3.184A2.997 2.997 0 0017.408 2H6.592a2.997 2.997 0 00-2.206 1.184 31.188 31.188 0 00-1.645 4.05C2.351 9.997 2.351 12 2.351 12s0 2.003.39 4.765a31.09 31.09 0 001.645 4.05A2.997 2.997 0 006.592 22h10.816a2.997 2.997 0 002.206-1.184 31.188 31.188 0 001.645-4.05c.39-2.762.39-4.765.39-4.765s0-2.003-.39-4.765a31.188 31.188 0 00-1.645-4.05zM10 15.5v-7l6 3.5-6 3.5z" />
//               </svg>
//               Visit My YouTube Channel
//             </a>
//           </div>
//         </div>
//       )}

//       <style>
//         {`
//           @keyframes fadeIn {
//             from {opacity: 0; transform: translateY(10px);}
//             to {opacity: 1; transform: translateY(0);}
//           }
//         `}
//       </style>
//     </>
//   );
// }

import React, { useEffect, useState, useRef } from "react";

export default function TopVideos({ isDropdownOpen, setIsDropdownOpen }) {
  const [videos, setVideos] = useState([]);
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.REACT_APP_YOUTUBE_CHANNEL_KEY;

  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const fetchTopVideos = async () => {
      try {
        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const channelData = await channelRes.json();
        const uploadsId =
          channelData.items[0].contentDetails.relatedPlaylists.uploads;

        let videoIds = [];
        let nextPageToken = "";
        while (true) {
          const playlistRes = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=50&pageToken=${nextPageToken}&key=${API_KEY}`
          );
          const playlistData = await playlistRes.json();

          playlistData.items.forEach((item) => {
            videoIds.push(item.snippet.resourceId.videoId);
          });

          if (playlistData.nextPageToken) {
            nextPageToken = playlistData.nextPageToken;
          } else {
            break;
          }
        }

        let allStats = [];
        for (let i = 0; i < videoIds.length; i += 50) {
          const batch = videoIds.slice(i, i + 50).join(",");
          const statsRes = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${batch}&key=${API_KEY}`
          );
          const statsData = await statsRes.json();
          allStats.push(...statsData.items);
        }

        const topVideos = allStats
          .filter((v) => v.statistics?.viewCount)
          .sort(
            (a, b) =>
              parseInt(b.statistics.viewCount) -
              parseInt(a.statistics.viewCount)
          )
          .slice(0, 3);

        setVideos(topVideos);
      } catch (err) {
        console.error("Error fetching top videos", err);
      }
    };

    fetchTopVideos();
  }, [API_KEY, CHANNEL_ID]);

  // Open dropdown immediately
  // const handleMouseEnter = () => {
  //   if (timeoutRef.current) clearTimeout(timeoutRef.current);
  //   setIsDropdownOpen(true);
  // };

  // Close dropdown after a short delay to prevent flicker
  // const handleMouseLeave = () => {
  //   timeoutRef.current = setTimeout(() => {
  //     setIsDropdownOpen(false);
  //   }, 300); // 300ms delay before hiding
  // };

  return (
    <>
      {/* This is your hover trigger area */}

      {/* Dropdown container always mounted, opacity + pointer-events used */}
      <div
        className="bg-dark top-videos-dropdown"
        ref={dropdownRef}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        style={{
          position: "fixed",
          top: "30vh",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90vw",
          height: "45vh",
          background: "white",
          boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
          borderRadius: "8px",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          overflow: "hidden",

          opacity: isDropdownOpen ? 1 : 0,
          pointerEvents: isDropdownOpen ? "auto" : "none",
          transition: "opacity 3s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            // justifyContent: "space-around",
            height: "100%",
            alignItems: "center",
            flex: 1,
          }}
        >
          {videos.length === 0 ? (
            <p>Loading videos...</p>
          ) : (
            (() => {
              const topThreeVideos = [...videos]
                .sort(
                  (a, b) =>
                    parseInt(b.statistics.viewCount) -
                    parseInt(a.statistics.viewCount)
                )
                .slice(0, 3);
              let orderedVideos = topThreeVideos;
              if (topThreeVideos.length === 3) {
                orderedVideos = [
                  topThreeVideos[1],
                  topThreeVideos[0],
                  topThreeVideos[2],
                ];
              }
              return orderedVideos.map((video, i) => (
                <div
                  key={i}
                  style={{
                    flex: "1 1 30%",
                    margin: "0 10px",
                    borderRadius: "6px",
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <iframe
                    width="100%"
                    height="70%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.snippet.title}
                    allowFullScreen
                    style={{ border: "none" }}
                  ></iframe>
                  <div style={{ padding: "8px" }}>
                    <h5 style={{ margin: "0 0 4px", fontSize: "1rem" }}>
                      {video.snippet.title}
                    </h5>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.85rem",
                        color: "#555",
                      }}
                    >
                      Views:{" "}
                      {parseInt(video.statistics.viewCount).toLocaleString()}
                    </p>
                  </div>
                </div>
              ));
            })()
          )}
        </div>

        <div style={{ marginTop: "12px", textAlign: "center", width: "100%" }}>
          <a
            href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#FF0000",
              color: "#fff",
              fontWeight: "700",
              fontSize: "1.2rem",
              padding: "10px 20px",
              borderRadius: "30px",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(255, 0, 0, 0.5)",
              transition: "background-color 0.3s ease, box-shadow 0.3s ease",
              userSelect: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#cc0000";
              e.currentTarget.style.boxShadow =
                "0 6px 16px rgba(204, 0, 0, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FF0000";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(255, 0, 0, 0.5)";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              fill="white"
              viewBox="0 0 24 24"
              style={{ display: "inline-block" }}
              aria-hidden="true"
              focusable="false"
            >
              <path d="M19.615 3.184A2.997 2.997 0 0017.408 2H6.592a2.997 2.997 0 00-2.206 1.184 31.188 31.188 0 00-1.645 4.05C2.351 9.997 2.351 12 2.351 12s0 2.003.39 4.765a31.09 31.09 0 001.645 4.05A2.997 2.997 0 006.592 22h10.816a2.997 2.997 0 002.206-1.184 31.188 31.188 0 001.645-4.05c.39-2.762.39-4.765.39-4.765s0-2.003-.39-4.765a31.188 31.188 0 00-1.645-4.05zM10 15.5v-7l6 3.5-6 3.5z" />
            </svg>
            Visit My YouTube Channel
          </a>
        </div>
      </div>
    </>
  );
}
