
<style>
.footer {
    font-size: 1.3em;
    text-align: center;

    color: #fff;
    background-color: #26b9b1;
}
.header {
    display: flex;

    position: fixed;
    z-index: 99;

    width: 100%;
    min-width: 1217px;

    background: rgba(81, 90, 110, .8);

    align-items: center;
}
.footer-span {
    margin: 0 0 0 94px;
}
.container {
    position: relative;

    width: 100%;
    min-height: 100vh;

    background: url('../style/images/bg5.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container-right,
.container-left {
    height: 84vh;
    background: #fff;
    border: 2px solid #000;
    border-radius: 2em;
    margin: 16px 0 0 0px;
}
.container-left {
    width: 20%;
    padding: 36px 0 0 24px;
    color:#000;
}
.container-right {
    width: 62%;
    margin-left: 56px;
    color:#000;
        padding: 30px;
        overflow: auto;
}
.pointer {
    color: #000;
    background: #000;
    border-radius: 5em;
    font-size: 0.1em;
    margin: 0 20px 0 0;
    letter-spacing: 0;
}
.title-choose {
        display: flex;
    align-items: center;
    letter-spacing: 6px;
    /* padding: 0 0 0 24px; */
}
.teacher-name {
    display: flex;
    flex-flow: wrap;
    padding: 20px 0 0px 22px;
    height: 166px;
}
.teacher-name div {
    width: 60px;
    text-align: center;
    font-size: 1.3em;
    cursor: pointer;
}
.isClicked {
    /* text-decoration: underline; */
    border-bottom: 2px solid #000;
}
.title-commom {
    margin: 20px 0;
    cursor:pointer;
}
.image-container {
    width: 160px;
    height: 20vh;
    float: right;
    margin: 36px 40px 20px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #000;
}
.image-container img {
    width: 94%;
    height: 94%;
}
.person-introduce {
    color:#26b9b1;
    margin: 10px 0;
    font-size: 1.3em;
}
.container-right h1{
 font-size: 2.5em;
}
.person-context {
    text-indent:2em;
}

.person-page {
    padding: 0 0 0 2em;
}
</style>
<template>
    <Layout>
        <Header class="header">
            <navheader  v-bind:clicknav="index"></navheader>
        </Header>
        <Content>
           <div class="container">
               <div class="container-left">
                   <div >
                       <h1 class="title-choose title-commom" @click="chooseTitle(10)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 10 ? 'isClicked' : null]">实验计划</span></h1>
                   </div>
                   <div>
                       <h1 class="title-choose title-commom" @click="chooseTitle(11)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 11 ? 'isClicked' : null]">课程设计</span></h1>
                   </div>
                   <div>
                       <h1 class="title-choose title-commom" @click="chooseTitle(12)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 12 ? 'isClicked' : null]">实验指导书</span></h1>
                   </div>
                   <div>
                       <!-- <h1 class="title-choose title-commom" @click="chooseTitle(13)"><Icon type="ios-radio-button-off" class="pointer" /><span v-bind:class="[chooseIndex == 13 ? 'isClicked' : null]">课程规划</span></h1> -->
                   </div>
               </div>
               <!-- 课程简介 -->
               <div class="container-right" v-if="chooseIndex == 10">
                   
                   <div class="image-container">
                       <img src="../style/images/xie.png">
                   </div>
                   <h1>谢光强</h1>
                   
                   <p class="person-introduce">个人简介</p>
                   <p class="person-context">谢光强，博士，副教授，广东工业大学计算机学院副院长，中国人工智能学会科普工作委员会委员、中国人工智能学会知识工程与分布智能专业委员会青年委员、CCF计算机应用专业委员会通信委员、广东省青年科学家协会第四届理事、广东省科技咨询专家库专家、CCF YOCSEF 广州委员、广东省计算机学会大数据专业委员会委员、广东省电子政务大数据专家委员会专家，广东省科技咨询专家库专家，广东省高等学校"千百十工程"培养对象、广东工业大学创新行动计划专家委员会委员。</p>
                   <p class="person-context">主要研究领域为人工智能、移动互联网、数据挖掘。主持和参加国家自然科学基金、省市科技等各类项目30余项，申请专利和软件著作权33项，获授权23项，发表论文20余篇。个人共获各类省、市、校奖项40余项，指导学生获各类科技竞赛奖项140余项，其中省级以上奖项50余项，其中被评选为广东工业大学“学生最喜爱的教师”、“十佳授课教师”、“师德标兵”、“年度优秀教师” ，获得“先进科技工作者”、“教学优秀一等奖”、“计算机学院师德先进个人”等荣誉称号。</p>
                   <p class="person-context">一、主持1项省精品资源共享课，3项校教育教学改革项目, 参与的教改成果《与产业深度融合全程融入的大学生创新创业教育改革与实践》，获得了2017年广东省教育教学成果奖（高等教育）“一等奖”。</p>
                   <p class="person-context">二、主持研发的一项科技成果《质量计量信息一体化网络平台》通过成果鉴定，为省内首创，获得云浮市级科技进步奖二等奖,该成果推广到多个国家级、地市级产品质量检测机构。负责国内首部石材企业信用等级的划分与评定标准的设计工作，编制了广东省地方标准《石材生产企业信用等级的划分与评定》,为国内石材企业信用评级提出标准，主持研发了配套的《石材企业信用评级网络平台》，实现石材企业信用的网络化实时自动评级，广东省3000多家石材企业信用数据都将纳入平台进行管理，为广东省石材企业信用实现标准化、信息化提供了重要支撑。 </p>
                   <p class="person-context">三、指导学生获各类科技竞赛奖项140余项，省级以上奖项50余项，指导学生获得第十四届"挑战杯"全国大学生课外学术科技作品竞赛"智慧城市"专项赛决赛"特等奖"（全国共三项）、第十二届"挑战杯"全国大学生课外学术科技作品竞赛终审决赛"一等奖"，均刷新了学校在"挑战杯"竞赛中获奖层次的记录！指导的大学生科技成果受到了广东卫视、广州日报、新快报等主流媒体的广泛关注和报道，2017年5月，项目组接受了广东卫视专访并介绍了项目的主要内容和成果，采访内容在《广东新闻联播》中作为头条播出，作品获广东省教育厅推荐，代表广东省参加2017第十届全国大学生创新创业年会。</p>
                   <p class="person-context">四、创建了学生科研创新团队“QG工作室”，大力提高学生科研创新、团队协作能力，工作室被评为广东工业大学“标志性获奖团队”；申请国家大学生创新创业训练计划、广东省大学生科技创新培育专项(重点)资金等项目30多项。“QG工作室”获得了由共青团中央、全国青联、全国学联、全国少工委、中国青少年科技创新奖励基金共同设立的，以邓小平同志命名的大学生“小平科技创新团队”称号，广东省共有两个团队获得此项称号，全国共50个大学生科技创新团队获得此项称号。</p>
                   <p class="person-context">五、培养的学生多人获得“国家一等奖学金”等各类奖学金、获得“广东工业大学十佳优秀学业大学生”称号3人（人数约占当年毕业生总数的千分之一），“广东工业大学十佳创新之星”称号2人，“广东工业大学十佳自强不息大学生”提名奖1人。</p>
                   <p class="person-context">六、培养的大部分学生进入了华为、阿里巴巴、百度、腾讯、京东等知名IT公司工作，获得用人单位的肯定和好评！其中指导的毕业生，曾获得了"百度最佳个人"（该奖项颁发为一年一度，颁发给百度优秀杰出员工，名额每年只有五个）、“腾讯最佳员工”（人数约占腾讯员工数的5%）、“腾讯微信事业群绩效突出者”（人数约占微信事业群1700人的10%）。</p>
                   
                   <p class="person-introduce">个人荣誉</p>
                   <p class="person-context">1、2017 广东省教育教学成果奖（高等教育）“一等奖”（排名第八）</p>
                   <p class="person-context">2、2016 广东省第五届师德征文活动“二等奖”</p>
                   <p class="person-context">3、2012 广东省第一届高等院校青年教师教学基本功大赛 “优秀奖”</p>
                   <p class="person-context">4、2017 广东工业大学“师德标兵”</p>
                   <p class="person-context">5、2009 广东工业大学“十佳授课教师”</p>
                   <p class="person-context">6、2007 广东工业大学“学生最喜爱的教师”</p>
                   <p class="person-context">7、2012 广东工业大学“年度优秀教师”</p>
                   <p class="person-context">8、广东工业大学教学优秀“一等奖”（5次）</p>
                   <p class="person-context">9、广东工业大学教学优秀“一等奖”“二等奖”（4次）</p>
                   <p class="person-context">10、2010 云浮市“科学技术奖二等奖”（排名第二）</p>
                   <p class="person-context">11、2013 广东工业大学“科研工作先进者”</p>
                   <p class="person-context">12、2011 广东工业大学“优秀指导老师”</p>
                   <p class="person-context">13、广东工业大学“优秀班主任”（2005-2008，2017）</p>
                   <p class="person-context">14、2007 计算机学院“师德先进个人”</p>
                   <p class="person-context">15、2009 广东工业大学“大学毕业生就业工作先进个人”</p>
                   <p class="person-context">16、2015 广东工业大学“优秀工会积极分子”</p>
                   <p class="person-context">17、2008年-2018年 进行毕业设计指导时，为学生选择高质量和有创新性的题目，耐心指导，连续十一年指导学生获得“毕业设计指导创新奖”</p>
                   <p class="person-context">18、2016-2017-1学期所讲授的《程序设计》课程，学生评教得分名列全校第一，评教分数连续六年学院排名第一。</p>
                    
                   <p class="person-introduce">指导学生获奖</p>
                   <p class=" person-page">1. 大学生“小平科技创新团队”（全国50支，广东省2支）<br>
                        2. 第十四届"挑战杯"全国大学生课外学术科技作品竞赛"智慧城市"专项赛决赛，“特等奖”（全国共三项）<br>
                        3. 第十二届“挑战杯”全国大学生课外学术科技作品竞赛终审决赛，“一等奖”<br>
                        4.“挑战杯”广东省大学生课外学术科技作品竞赛，“特等奖”3项<br>
                        5.“挑战杯”广东省大学生课外学术科技作品竞赛，“一等奖”3项、“二等奖”1项<br>
                        6 .“挑战杯-创青春"广东大学生创业大赛，银奖<br>
                        7.全国高校移动互联网应用创新大赛“二等奖”1项、“三等奖”1项。<br>
                        8.“蓝桥杯全国软件和信息技术专业人才大赛”个人赛全国总决赛，JAVA软件开发、嵌入式设计与开发组，“三等奖”各1项<br>
                        9.“蓝桥杯全国软件和信息技术专业人才大赛”个人赛广东省赛区C/C++程序设计、JAVA软件开发、嵌入式设计与开发组，“一等奖”5项，“二等奖”10项，“三等奖”10项<br>
                        10. 泛珠三角大学生计算机作品赛，“铜奖”1项，“优胜奖”1项<br>
                        11.广东省“高校杯”软件设计竞赛，“一等奖”1项、“二等奖”5项<br>
                        12.广东省计算机专业本科大学生毕业作品赛，“一等奖”4项，“二等奖”1项<br>
                        13.广东省大学生数字图像图形创作大赛，“一等奖”3项，“二等奖”2项<br>
                        14.广东省高校移动互联网应用开发创意大赛“金奖”1项，“银奖”1项<br>
                        15.广东省大学生电子设计竞赛，“二等奖”1项，“三等奖”2项<br>
                        16. 广东省大学生“合泰杯”单片机应用设计邀请赛，“二等奖”2项<br>
                        17. 广东省“粤嵌杯”大学生嵌入式与物联网设计大赛，“二等奖”1项，“三等奖”2项<br>
                        18. 广东省粤港澳大学生计算机软件应用大赛，“二等奖”和“最佳用户体验奖”<br>
                        19. 广东省Java程序员竞赛“三等奖”<br>
                        20. 广东省C程序员竞赛“二等奖”、“三等奖”<br>
                    </p>
                    <p class="person-introduce">知识产权</p>
                    <p class=" person-page">
                        1.一种基于控制器的并行打印系统， 发明专利，专利申请号：201710321442.x<br>
                        2.一种嵌入式系统及单色位图压缩、主机， 发明专利，专利申请号：201710422841.5<br>
                        3.一种求救方法、智能头盔、终端及系统， 发明专利，专利申请号：201710404316.0<br>
                        4.一种车祸监测方法及装置，专利申请号：发明专利，201710403952.1<br>
                        5.一种可穿戴设备电源管理方法及装置， 发明专利，专利申请号：201710404701.5<br>
                        6.一种基于体感设备的康复训练评估方法及系统， 发明专利，专利申请号：201710533108.0<br>
                        7.一种基于控制器的并行打印系统， 实用新型专利，专利申请号：201720511717.1<br>
                        8.一种嵌入式系统及单色位图压缩主机， 实用新型专利，专利申请号：201720659842.7<br>
                        9.一种智能急救头盔， 实用新型专利，专利申请号：201720626760.2<br>
                        10.一种车祸监测系统， 实用新型专利，专利申请号：201720632265.2<br>
                        11.一种可穿戴设备电源管理装置， 实用新型专利，专利申请号：201720632371.0<br>
                        12.一种基于体感设备的康复训练评估系统， 实用新型专利， 专利申请号：201720802908.3<br>
                        13.一款头盔内部硬件构造专利，外观专利， 专利申请号：2017302528844<br>
                        14.订单集群打印系统，计算机软件著作权，软著登记号：2017SR267145<br>
                        15.移动订单管理及打印系统，计算机软件著作权，软著登记号：2017SR274760<br>
                        16.微型控制打印系统，计算机软件著作权，软著登记号：2017SR274774<br>
                        17.智能急救头盔系统，计算机软件著作权，软著登记号：2017SR287905<br>
                        18.智能急救头盔APP软件，计算机软件著作权，软著登记号：2017SR288722<br>
                        19.康复训练及评估平台，计算机软件著作权，软著登记号：2017SR385752<br>
                        20.康复训练及评估移动管理系统，计算机软件著作权，软著登记号：2017SR385305<br>
                        21.一种电子药盒及其管理系统，发明专利，200910258397.3<br>
                        22.多功能便携式数据拷贝装置，实用新型专利，201110180046.8<br>
                        23.建筑楼宇声光质量检测模拟系统，计算机软件著作权，软著登记号：2011R11L029047<br>
                        24.企业缴费一卡通综合管理平台软件，计算机软件著作权，软著登记号：2011SR071360<br>
                        25.质量计量信息一体化管理平台软件，计算机软件著作权，软著登记号：2010SR000003<br>
                        26.3D虚拟场景编辑系统，计算机软件著作权，软著登记号：2009SR061272<br>
                        27.数字化虚拟场景实时漫游系统，计算机软件著作权，软著登记号：2009SR061274<br>
                        28.一种电子药盒，实用新型专利，200920291910.4<br>
                        29.一种无线智能家电语音控制系统，发明专利，专利申请号：200910213857.0<br>
                        30.一种交互式投影的检测系统，实用新型专利，专利申请号：200920194269.2<br>

                    </p>
                    <p class="person-introduce">学术活动</p>
                    <p class="person-context">
                        2013年6月30日，参加了“CCF YOCSEF广州分论坛十周年庆典暨华南大数据高峰论坛活动”，活动在广东工业大学大学城校区（大学城外环西路100号）大讲堂圆弧报告厅隆重举行。具体会议说明网址：http://www.scholat.com/teamwork/showPostMessage.html?id=127&teamId=297   
                    </p>
                    <p class="person-context">
                        参加了在广西南宁，广西大学召开的全国智能信息处理学术会议（NCIIP, National Conference on Intelligent Information Processing），该会议由中国人工智能学会知识工程与分布式智能专业委员会与中国计算机学会人工智能与模式识别专业委员会主办，2年举办一次，本届会议于2013 年 7 月 26 日至7 月28日举行，作为主持人主持了分组报告4B：智能决策与智能系统分组，宣读了论文《基于Krause多智能体一致性模型的研究》。本次会议收到稿件507篇，最后期刊录用200篇，录用率为39.4%。会议网址：http://nciip2013.gxu.edu.cn/
                    </p>
                    <p class="person-context">
                        参加了在北京召开的中国计算机学会人工智能会议，该会议由中国计算机学会主办，中国计算机学会人工智能与模式识别专业委员会协办，每两年召开一次。本届会议于2013 年 7 月 31 日至 8 月 2 日在北京举行，会议由北京航空航天大学计算机学院承办。参加分组报告会8：人工智能应用II，宣读了论文《多智能体一致性协议可视化仿真平台的研究》。本次会议收到稿件307篇，最后期刊录用93篇，录用率为30.3%。会议网址：http://www.ccfai2013.org/
                    </p>
                    <p class="person-context">
                        2013年8月17日，参加了CCF YOCSEF广州分论坛 “大数据与SDN”学术报告会，报告会在广州大学城中山大学信息科学与技术学院召开。本次活动由中山大学信息科学与技术学院承办，报告会由中山大学信息科学与技术学院吴迪博士与潘嵘博士共同组织。本次报告会邀请到四位分别来自学术界与工业界的嘉宾围绕“大数据与SDN”这一主题展开了精彩的演讲。美国纽约大学刘勇老师首先作了如何在微博系统上面向大规模用户群体进行在线投票推荐的报告；然后，华中科技大学刘方明老师介绍了软件定义的云数据中心网络中存在的机遇、挑战与尝试；接着，西安交通大学的胡成臣老师介绍了西安交大所开发的SDN开源硬件平台；最后，深圳科加诺DataKM运营总监郑伟先生用一些企业中的大数据案例来分析大数据的应用价值，并探讨大数据的本质精神。具体说明见网址：http://www.scholat.com/teamwork/showPostMessage.html?id=180&teamId=297
                    </p>

                    <p class="person-introduce">研究兴趣</p>
                    <P class="person-context">人工智能 , 移动互联网 ,数据挖掘</P>
               </div>
               <!-- end课程简介 -->
                <!-- 教学大纲   -->
                <div class="container-right" v-if="chooseIndex == 11">
                   
                   <!-- <div class="image-container">
                       <img src="../style/images/chen.png">
                   </div> -->
                   <h1>广东工业大学计算机学院教学改革项目列表（省级、校级）： </h1>
                   
                   <p class="person-introduce">教育背景</p>
                   <p class=" person-page">
                        粤教高函[2012]204号	计算机专业基础课程群的实验平台创新与内容体系优化	吴伟民	计算机学院	省级<br>
                        广工大教字〔2015〕132号	以挑战杯竞赛为平台培养大学生创新能力的探索和研究	谢光强	计算机学院	校级<br>
                        广工大教字〔2013〕116号	计算机专业学生课外科技活动中实践创新能力培养的研究与探索	谢光强	计算机学院	校级<br>
                        广工大教字〔2013〕116号	计算机专业核心课程群自主学习平台下教与学新型模式研究与实践	李杨	计算机学院	校级<br>
                        广工大教字〔2012〕154号	计算机专业基础课程群的实验平台创新与内容体系优化	吴伟民	计算机学院	校级<br>
                        广工大教字〔2010〕186号	数据结构与程序设计可视化实验平台和教学模式的改革与创新	吴伟民	计算机学院	校级<br>

                    </p>
                   
               </div>
               <!-- end教学大纲   -->
               <!-- 学习指南-->
                <div class="container-right" v-if="chooseIndex == 12">

                   <p class="person-introduce">谢光强：</p>
                   <p class=" person-page">
                        1 2017 广东省教育教学成果奖（高等教育）“一等奖”（排名第八）<br>
                        2 2016 广东省第五届师德征文活动“二等奖”<br>
                        3 2012 广东省第一届高等院校青年教师教学基本功大赛 “优秀奖”<br>
                        4 2017 广东工业大学“师德标兵”<br>
                        5 2009 广东工业大学“十佳授课教师”<br>
                        6 2007 广东工业大学“学生最喜爱的教师”<br>
                        7 2012 广东工业大学“年度优秀教师”<br>
                        8广东工业大学教学优秀“一等奖”（5次）、<br>
                        9广东工业大学教学优秀“一等奖”“二等奖”（4次）<br>
                        9 2010 云浮市“科学技术奖二等奖”（排名第二）<br>
                        10 2013 广东工业大学“科研工作先进者”<br>
                        11 2011 广东工业大学“优秀指导老师”<br>
                        12广东工业大学“优秀班主任”（2005-2008，2017）<br>
                        13 2007 计算机学院“师德先进个人”<br>
                        14 2009 广东工业大学“大学毕业生就业工作先进个人”<br>
                        15 2015 广东工业大学“优秀工会积极分子”<br>
                        16 2008年-2018年 进行毕业设计指导时，为学生选择高质量和有创新性的题目，耐心指导，连续十一年指导学生获得“毕业设计指导创新奖”<br>
                        17 2016-2017-1学期所讲授的《程序设计》课程，学生评教得分名列全校第一，评教分数连续六年学院排名第一。<br>
                    </p>
                    <p class="person-introduce">吴伟民： </p>
                    <p class=" person-page">
                        1997.07 广东省计算机学会首届安利电脑科技奖特等奖，排名1/1<br>
                        1997.06 广东省教学成果二等奖，排名1/5<br>
                        1996.12 国家级科技进步三等奖，排名2/2<br>
                        1993.12 曾宪梓高等师范院校教师奖三等奖，排名1/1<br>
                        1993.11 霍英东青年教师奖三等奖，排名1/1<br>
                        1993.10 国务院政府特殊津贴专家<br>
                        1993.02 国家级普通高等学院优秀教材特等奖，排名2/3<br>

                    </p>

               </div>
               <!-- end学习指南  -->
               <!--课程规划-->
                <div class="container-right" v-if="chooseIndex == 13">
                   

                   
                   <p class="person-introduce">QG工作室：</p>
                   <p class=" person-page">
                        1. 大学生“小平科技创新团队”（全国50支，广东省2支）<br>
                        2. 第十四届"挑战杯"全国大学生课外学术科技作品竞赛"智慧城市"专项赛决赛，“特等奖”（全国共三项）<br>
                        3. 第十二届“挑战杯”全国大学生课外学术科技作品竞赛终审决赛，“一等奖”<br>
                        4.“挑战杯”广东省大学生课外学术科技作品竞赛，“特等奖”3项<br>
                        5.“挑战杯”广东省大学生课外学术科技作品竞赛，“一等奖”3项、“二等奖”1项<br>
                        6 .“挑战杯-创青春"广东大学生创业大赛，银奖<br>
                        7.全国高校移动互联网应用创新大赛“二等奖”1项、“三等奖”1项。<br>
                        8.“蓝桥杯全国软件和信息技术专业人才大赛”个人赛全国总决赛，JAVA软件开发、嵌入式设计与开发组，“三等奖”各1项<br>
                        9.“蓝桥杯全国软件和信息技术专业人才大赛”个人赛广东省赛区C/C++程序设计、JAVA软件开发、嵌入式设计与开发组，“一等奖”5项，“二等奖”10项，“三等奖”10项<br>
                        10. 泛珠三角大学生计算机作品赛，“金奖”1项，“铜奖”3项，“优胜奖”1项<br>
                        11.广东省“高校杯”软件设计竞赛，“一等奖”2项、“二等奖”5项<br>
                        12.广东省计算机专业本科大学生毕业作品赛，“一等奖”4项，“二等奖”1项<br>
                        13.广东省大学生数字图像图形创作大赛，“一等奖”3项，“二等奖”2项<br>
                        14.广东省高校移动互联网应用开发创意大赛“金奖”1项，“银奖”1项<br>
                        15.广东省大学生电子设计竞赛，“二等奖”1项，“三等奖”2项<br>
                        16. 广东省大学生“合泰杯”单片机应用设计邀请赛，“二等奖”2项<br>
                        17. 广东省“粤嵌杯”大学生嵌入式与物联网设计大赛，“二等奖”1项，“三等奖”2项<br>
                        18. 广东省粤港澳大学生计算机软件应用大赛，“二等奖”和“最佳用户体验奖”<br>
                        19. 广东省Java程序员竞赛“三等奖”<br>
                        20. 广东省C程序员竞赛“二等奖”、“三等奖”<br>
                        21. 全国大学生软件测试大赛“二等奖”1项，“三等奖”2项<br>

                    </p>

                    <p class="person-introduce">ACM：</p>
                    <p class="person-context">
                        我校在2016年国际大学生程序设计竞赛亚洲区中国区总决赛，最终取得6金5银7铜的好成绩，在全国参赛高校中名列前茅，奖牌数和金牌数均创我校参加该项赛事以来的最好成绩。
                    </p>
               </div>
               <!-- end课程规划  -->
           </div>
        </Content>
        <Footer class="footer">
            <span>@版权所有</span>
            <span class="footer-span">广东工业大学计算机学院QG工作室</span>
        </Footer>
    </Layout>
</template>
<script>
	
import {mapState, mapActions} from 'vuex'
import navheader from '../../../components/navheader.vue'
	export default {
		name: 'practical',
		components:{navheader},
		data(){
			return {
                index: 5,
                chooseIndex: 10,


			}
        },
        mounted() {

        },
		computed: {

			// 从这里引入 vueX 的 state 的变量到组件中用
			...mapState('user' ,{
				// 这里用到的是 es6 的函数写法
                'user': state => {
                    return state
				},
            }),
		},
		methods:{
            chooseTitle (index) {
                    this.chooseIndex = index

            }
		},
		created: function () {

        },


	}
</script>
