import "./profile.scss";

const Profile = () => {
  return (
    <section className="profile profile-page">
      <div className="path flex flex-center">
        <div className="main">Головна</div>
        <div className="dot"></div>
        <div className="current">Особистий кабінет</div>
      </div>
      <h2>Особистий кабінет</h2>
    </section>
  );
};

export default Profile;
