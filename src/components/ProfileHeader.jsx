export default function ProfileHeader({ name, role, location, bio }) {
  return (
    <header className="profile-header">
      <div className="avatar">{name.charAt(0)}</div>
      <div>
        <h1>{name}</h1>
        <p className="role">{role}</p>
        <p className="location">{location}</p>
        <p className="bio">{bio}</p>
      </div>
    </header>
  );
}