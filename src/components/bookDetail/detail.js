import Share from '@/components/share/share.vue'
import ShareTip from '@/components/shareTip/ShareTip.vue'

export default {
    name: "BookDetail",
    components: { Share, ShareTip },
    data() {
        return {
            works: {},
            isLikeClick: JSON.parse(localStorage.getItem(this.$route.query.videoid)) || false,
            postData: {} // 分享海报数据
        };
    },
    mounted() {
        this.initData();
        this.com.share(this, location.href);
    },
    methods: {
        initData() {
            let self = this;

            let listUrl = 'http://xinzhimin.xyz/book/selectById?pdfid=' + this.$route.query.pdfid;
            this.com.getData(this, listUrl, {}, (res) => {
                console.log('接口返回的数据', res);
                if (res) {
                    this.works = res;

                    // 分享海报数据
                    self.postData.videopic = res.pdfpic;
                    self.postData.videoname = res.pdfname;
                    self.postData.videoauthornames = res.pdftempname;
                    self.postData.header = 'book';
                }
            })

        },
        // 分享海报
        toPost() {
            this.$refs.share.shareOpen();
        },
        toShare() {
            // alert('点击分享');
            this.$refs.tip.openTip();
        },
        toHomePage() {
            this.$router.push({ path: '/home1' });
        },
        toList() {
            // this.$router.push({ path: '/list' });
            history.go(-1);
        },
        // 点赞
        lickCount(type) {
            let self = this;
            let listUrl = 'http://xinzhimin.xyz/video/addorcutlike?videoid=' + this.$route.query.videoid + '&operate=' + type;
            this.com.getData(this, listUrl, {}, (res) => {
                console.log('接口返回的数据', res);
                // 更新点赞人数
                self.works.likecount = res.likecount;
                self.isLikeClick = (type == 'add') ? true : false;
                localStorage.setItem(this.$route.query.videoid, self.isLikeClick);
            });
        },

    },
    destroyed() {}
};