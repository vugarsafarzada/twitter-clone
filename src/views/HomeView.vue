<template>
  <div class="home">
    <CreateNewPost />
    <PostTimeLine :data="posts" />
  </div>
</template>

<script>
import CreateNewPost from "@/components/CreateNewPost";
import PostTimeLine from "@/components/PostTimeLine.vue";
export default {
  name: 'HomeView',
  components: {
    CreateNewPost, PostTimeLine
  },
  data() {
    return {
      posts: [
        {
          id: 121349,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "Life is short we gotta do things right!",
            date: "26 Sep",
          },
          reactions: {
            like: 104,
            comment: 36,
            retweet: 7,
          }

        },
        {
          id: 121348,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "Few years back. When Messi and Ronaldo still dey crase.Messi go score Hattrick on Saturday, trend through out the day.Ronaldo go come on Sunday score 4goals trend till on Monday. 😭",
            date: "17 Aug",
          },
          reactions: {
            like: 251,
            comment: 42,
            retweet: 17,
          }

        },
        {
          id: 121347,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "“The original Romans, Greeks, Egyptians, Vikings, Chinese, Japanese, and every other group were actually black before white people appeared from nowhere and beat them despite black people being superior”",
            date: "9 Feb",
          },
          reactions: {
            like: 14,
            comment: 54,
            retweet: 9,
          }

        },
        {
          id: 121346,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "In computer programming, characters are pieced together to form strings, which are data types that are often implemented into bytes of data that can be read by computers.With online activity and the use of Internet platforms expanding, character counting tools can be used more and more to manage computer programs and web applications effectively",
            date: "12 Jan",
          },
          reactions: {
            like: 71,
            comment: 16,
            retweet: 2,
          }

        },
        {
          id: 121349,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "Life is short we gotta do things right!",
            date: "26 Sep",
          },
          reactions: {
            like: 104,
            comment: 36,
            retweet: 7,
          }

        },
        {
          id: 121348,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "Few years back. When Messi and Ronaldo still dey crase.Messi go score Hattrick on Saturday, trend through out the day.Ronaldo go come on Sunday score 4goals trend till on Monday. 😭",
            date: "17 Aug",
          },
          reactions: {
            like: 251,
            comment: 42,
            retweet: 17,
          }

        },
        {
          id: 121347,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "“The original Romans, Greeks, Egyptians, Vikings, Chinese, Japanese, and every other group were actually black before white people appeared from nowhere and beat them despite black people being superior”",
            date: "9 Feb",
          },
          reactions: {
            like: 14,
            comment: 54,
            retweet: 9,
          }

        },
        {
          id: 121346,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "In computer programming, characters are pieced together to form strings, which are data types that are often implemented into bytes of data that can be read by computers.With online activity and the use of Internet platforms expanding, character counting tools can be used more and more to manage computer programs and web applications effectively",
            date: "12 Jan",
          },
          reactions: {
            like: 71,
            comment: 16,
            retweet: 2,
          }

        },
        {
          id: 121349,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "Life is short we gotta do things right!",
            date: "26 Sep",
          },
          reactions: {
            like: 104,
            comment: 36,
            retweet: 7,
          }

        },
        {
          id: 121348,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "Few years back. When Messi and Ronaldo still dey crase.Messi go score Hattrick on Saturday, trend through out the day.Ronaldo go come on Sunday score 4goals trend till on Monday. 😭",
            date: "17 Aug",
          },
          reactions: {
            like: 251,
            comment: 42,
            retweet: 17,
          }

        },
        {
          id: 121347,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "“The original Romans, Greeks, Egyptians, Vikings, Chinese, Japanese, and every other group were actually black before white people appeared from nowhere and beat them despite black people being superior”",
            date: "9 Feb",
          },
          reactions: {
            like: 14,
            comment: 54,
            retweet: 9,
          }

        },
        {
          id: 121346,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "In computer programming, characters are pieced together to form strings, which are data types that are often implemented into bytes of data that can be read by computers.With online activity and the use of Internet platforms expanding, character counting tools can be used more and more to manage computer programs and web applications effectively",
            date: "12 Jan",
          },
          reactions: {
            like: 71,
            comment: 16,
            retweet: 2,
          }

        },
        {
          id: 121349,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "Life is short we gotta do things right!",
            date: "26 Sep",
          },
          reactions: {
            like: 104,
            comment: 36,
            retweet: 7,
          }

        },
        {
          id: 121348,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "Few years back. When Messi and Ronaldo still dey crase.Messi go score Hattrick on Saturday, trend through out the day.Ronaldo go come on Sunday score 4goals trend till on Monday. 😭",
            date: "17 Aug",
          },
          reactions: {
            like: 251,
            comment: 42,
            retweet: 17,
          }

        },
        {
          id: 121347,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "“The original Romans, Greeks, Egyptians, Vikings, Chinese, Japanese, and every other group were actually black before white people appeared from nowhere and beat them despite black people being superior”",
            date: "9 Feb",
          },
          reactions: {
            like: 14,
            comment: 54,
            retweet: 9,
          }

        },
        {
          id: 121346,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "In computer programming, characters are pieced together to form strings, which are data types that are often implemented into bytes of data that can be read by computers.With online activity and the use of Internet platforms expanding, character counting tools can be used more and more to manage computer programs and web applications effectively",
            date: "12 Jan",
          },
          reactions: {
            like: 71,
            comment: 16,
            retweet: 2,
          }

        },
        {
          id: 121349,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "Life is short we gotta do things right!",
            date: "26 Sep",
          },
          reactions: {
            like: 104,
            comment: 36,
            retweet: 7,
          }

        },
        {
          id: 121348,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "Few years back. When Messi and Ronaldo still dey crase.Messi go score Hattrick on Saturday, trend through out the day.Ronaldo go come on Sunday score 4goals trend till on Monday. 😭",
            date: "17 Aug",
          },
          reactions: {
            like: 251,
            comment: 42,
            retweet: 17,
          }

        },
        {
          id: 121347,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "../assets/profile.jpg"
          },
          content: {
            text: "“The original Romans, Greeks, Egyptians, Vikings, Chinese, Japanese, and every other group were actually black before white people appeared from nowhere and beat them despite black people being superior”",
            date: "9 Feb",
          },
          reactions: {
            like: 14,
            comment: 54,
            retweet: 9,
          }

        },
        {
          id: 121346,
          author: {
            name: "VOYAGER",
            user_name: "@VugarSafarzada",
            profilePic: "profile.jpg"
          },
          content: {
            text: "In computer programming, characters are pieced together to form strings, which are data types that are often implemented into bytes of data that can be read by computers.With online activity and the use of Internet platforms expanding, character counting tools can be used more and more to manage computer programs and web applications effectively",
            date: "12 Jan",
          },
          reactions: {
            like: 71,
            comment: 16,
            retweet: 2,
          }

        },
      ]
    }
  },
}
</script>

<style scoped>
.home {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: -3vw;
  overflow-y: scroll;
  padding-top: 60px
}
</style>