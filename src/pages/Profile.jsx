import "./Profile.css";
import default_banner from "./img/user-profile/thrasher_1_1x.webp";
import back_button from "./img/user-profile/Fill 315.svg";
import default_profile_pic from "./img/user-profile/tumblr_7a32890ad6c76f57f62db9f7662f992e_6977fc0b_1280_1_1x.webp";
import badge1 from "./img/user-profile/group_1x.webp";
import badge2 from "./img/user-profile/group_1_1x.webp";
import badge3 from "./img/user-profile/group_2_1x.webp";
import server1 from "./img/user-profile/rectangle_3_1x.webp";
import server2 from "./img/user-profile/component_5_1x.webp";
import server3 from "./img/user-profile/rectangle_3a_1x.webp";
import server4 from "./img/user-profile/server_2_1x.webp";
import yt from "./img/user-profile/ytlogo_1x.webp";
import github from "./img/user-profile/ghlogo_1x.webp";
import twitch from "./img/user-profile/twitchglitchpurple_1_1x.webp";
import linkedin from "./img/user-profile/linkedin_logo_1_1x.webp";
import eg from "./img/user-profile/epiclogo_1x.webp";
import reddit from "./img/user-profile/reddit_logo_16_1_1x.webp";
import steam from "./img/user-profile/steamlogo_1x.webp";
import spotify from "./img/user-profile/spologo_1x.webp";
import social_connected from "./img/user-profile/outline_social_verified_1x.webp";

function Profile() {
	return (
		<div className="profile_container">
			<div className="profile-banner">
				<img src={default_banner} alt="" width="100%" />
				<button className="back-button">
					<img src={back_button} alt="" />
				</button>
				<div className="user-profile-text">User Profile</div>
				<div className="badges">
					<div className="badges-img">
						<img src={badge1} alt="" />
					</div>
					<div className="badges-img">
						<img src={badge2} alt="" />
					</div>
					<div className="badges-img">
						<img src={badge3} alt="" />
					</div>
				</div>
				<div className="servers">
					<div className="server-text">Servers:</div>
					<div className="server-imgs">
						<div className="server-img">
							<img src={server1} alt="" />
						</div>
						<div className="server-img">
							<img src={server2} alt="" />
						</div>
						<div className="server-img">
							<img src={server3} alt="" />
						</div>
						<div className="server-img">
							<img src={server4} alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="profile-pic">
				<img src={default_profile_pic} alt="" />
				<div className="person-name">
					<div className="person-id">ddevil__100</div>
					<div className="person_hash">#0000</div>
				</div>
				<div className="person-metamask_id">0xd12..76</div>
				<div className="social-text">SOCIAL</div>
			</div>
			<div className="social">
				<div className="social-links">
					<div className="social-logo">
						<img src={yt} alt="" />
					</div>
					<div className="social-links-text">Thrasher</div>
					<div className="social-connected">
						<img src={social_connected} alt="" />
					</div>
				</div>
				<div className="social-links">
					<div className="social-logo">
						<img src={github} alt="" />
					</div>
					<div className="social-links-text">Thrasher</div>
					<div className="social-connected">
						<img src={social_connected} alt="" />
					</div>
				</div>
				<div className="social-links">
					<div className="social-logo">
						<img src={twitch} alt="" />
					</div>
					<div className="social-links-text">Thrasher</div>
					<div className="social-connected">
						<img src={social_connected} alt="" />
					</div>
				</div>
				<div className="social-links">
					<div className="social-logo">
						<img src={linkedin} alt="" />
					</div>
					<div className="social-links-text">Thrasher</div>
					<div className="social-connected">
						<img src={social_connected} alt="" />
					</div>
				</div>
				<div className="social-links">
					<div className="social-logo">
						<img src={eg} alt="" />
					</div>
					<div className="social-links-text">Thrasher</div>
					<div className="social-connected">
						<img src={social_connected} alt="" />
					</div>
				</div>
				<div className="social-links">
					<div className="social-logo">
						<img src={reddit} alt="" />
					</div>
					<div className="social-links-text">Thrasher</div>
					<div className="social-connected">
						<img src={social_connected} alt="" />
					</div>
				</div>
				<div className="social-links">
					<div className="social-logo">
						<img src={steam} alt="" />
					</div>
					<div className="social-links-text">Thrasher</div>
					<div className="social-connected">
						<img src={social_connected} alt="" />
					</div>
				</div>
				<div className="social-links">
					<div className="social-logo">
						<img src={spotify} alt="" />
					</div>
					<div className="social-links-text">Thrasher</div>
					<div className="social-connected">
						<img src={social_connected} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
