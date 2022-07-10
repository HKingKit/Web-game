

///////////// sign up///////
function signup(e) {
    event.preventDefault();
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var user = {
        username: username,
        email: email,
        password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("đăng ký thành công");
    window.location.href="index3.html";
}

function login(e) {
    event.preventDefault();
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (user ==null){
        alert("sai tài khoản hoặc mật khẩu hoặc email")
    }
    else if(username == data.username &&
        email == data.email &&
        password == data.password){
        alert("đăng nhập thành công");
        window.location.href="index3.html";
    }
    else{
        alert("vui lòng nhập tài khoản và mật khẩu");
    }
}

function generateAvatar(
    text,
    foregroundColor="white",
    backgroundColor="black",
) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width=20;
    canvas.height=20;

    context.fillStyle = backgroundColor;
    context.fillRect(0,0, canvas.width, canvas.height);

    context.font = "bold 100 Assistant";
    context.fillStyle = foregroundColor;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(text,canvas.width / 2, canvas.height / 2);

    return canvas.toDataURL("image/png");

}
    var avatar = generateAvatar;
    document.getElementById("avatar").src = generateAvatar("avatar", "white", "#009578");


// avatarURL({ format, size } = {}) {
//     if (!this.avatar) return null;
//     return this.client.rest.cdn.Avatar(this.id, this.avatar, format, size);
//    }



// async edit({ name = this.name, avatar, channel }, reason) {
//     if (avatar && typeof avatar === 'string' && !avatar.startsWith('data:')) {
//      avatar = await DataResolver.resolveImage(avatar);
//     }
//     if (channel) channel = channel instanceof Channel ? channel.id : channel;
//     const data = await this.client.api.webhooks(this.id, channel ? undefined : this.token).patch({
//      data: { name, avatar, channel_id: channel },
//      reason,
//     });
  
//     this.name = data.name;
//     this.avatar = data.avatar;
//     this.channelID = data.channel_id;
//     return this;
//    }