module.exports = mongoose => {
  const schema = mongoose.Schema({
    name: String,
    age: String,
    email: String,
    gender: String,
  })

  schema.method("toJSON", function(){
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;

    return object
  });

  return mongoose.model("users", schema)
}