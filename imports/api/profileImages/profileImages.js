export const ProfileImages = new FS.Collection("profileImages", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});

ProfileImages.allow({
  
  insert:function(userId,project){
    return true;
  },

  update:function(userId,project,fields,modifier){
   return true;
  },
  
  remove:function(userId,project){
    return true;
  },
  
  download:function(){
    return true;
  }

});
