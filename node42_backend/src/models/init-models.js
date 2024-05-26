import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _chat from  "./chat.js";
import _code from  "./code.js";
import _users from  "./users.js";
import _video from  "./video.js";
import _video_comment from  "./video_comment.js";
import _video_like from  "./video_like.js";
import _video_type from  "./video_type.js";

export default function initModels(sequelize) {
  const chat = _chat.init(sequelize, DataTypes);
  const code = _code.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);
  const video = _video.init(sequelize, DataTypes);
  const video_comment = _video_comment.init(sequelize, DataTypes);
  const video_like = _video_like.init(sequelize, DataTypes);
  const video_type = _video_type.init(sequelize, DataTypes);

  video.belongsTo(video_type, { as: "type", foreignKey: "type_id"});
  
  
  
  video.belongsTo(users, { as: "user", foreignKey: "user_id"});
  video.hasMany(video_comment, { as: "video_comments", foreignKey: "video_id"});
  video.hasMany(video_like, { as: "video_likes", foreignKey: "video_id"});
  
  
  video_comment.belongsTo(users, { as: "user", foreignKey: "user_id"});
  video_like.belongsTo(users, { as: "user", foreignKey: "user_id"});
  video_comment.belongsTo(video, { as: "video", foreignKey: "video_id"});
  video_like.belongsTo(video, { as: "video", foreignKey: "video_id"});
  
  video_type.hasMany(video, { as: "videos", foreignKey: "type_id"});
  

  users.hasMany(video, { as: "videos", foreignKey: "user_id"});
  users.hasMany(video_comment, { as: "video_comments", foreignKey: "user_id"});
  users.hasMany(video_like, { as: "video_likes", foreignKey: "user_id"});

  return {
    chat,
    code,
    users,
    video,
    video_comment,
    video_like,
    video_type,
  };
}
