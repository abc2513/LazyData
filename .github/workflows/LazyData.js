Vue.config.productionTip = false;//阻止生成非生产环境提示
var app1=new Vue({
    el:'#title',
});
var app2 =new Vue({
    el:'#root',//element:选择器
    data:{//数据
        DataNumber:5,//数据条数
        Data:[[,],[,],[,],[,],[,]],//原始数据
        DoubleData:"true",//是否为双变量统计模式
        k:0,b:0,r:0,x_ave:0,x2_ave:0,y_ave:0,y2_ave:0,xy_ave:0,x_o:0,
    },
    computed:{//计算属性

    },//计算属性靠返回值
    methods:{
        calculate(){
            var x_sum=0,x2_sum=0,y_sum=0,y2_sum=0,xy_sum=0,
            x_ave,x2_ave,y_ave,y2_ave,xy_ave,xy_ave,
            x_o=0,
            k,b,r;
            for(var i=0;i<this.Data.length;i++){
                if(this.Data[i][0]!==undefined)
                {
                    x_sum=x_sum+Number(this.Data[i][0]);
                    x2_sum=x2_sum+Math.pow(Number(this.Data[i][0]),2);
                }
            }
            x_ave=x_sum/this.Data.length;
            x2_ave=x2_sum/this.Data.length;
            for(var i=0;i<this.Data.length;i++){
                if(this.Data[i][0]!==undefined)
                    x_o=x_o+Math.pow((Number(this.Data[i][0])-x_ave),2);
            }
            x_o=Math.sqrt(x_o/(this.Data.length*(this.Data.length-1)));
            if(this.DoubleData=="true"){
                for(var i=0;i<this.Data.length;i++){
                    if(this.Data[i][1]!==undefined)
                        {
                            y_sum=y_sum+Number(this.Data[i][1]);
                            y2_sum=y2_sum+Math.pow(Number(this.Data[i][1]),2);
                            xy_sum=xy_sum+Number(this.Data[i][1])*Number(this.Data[i][0]);
                        }
                }
                y_ave=y_sum/this.Data.length;
                xy_ave=xy_sum/this.Data.length;
                y2_ave=y2_sum/this.Data.length;
                k=(x_ave*y_ave-xy_ave)/(Math.pow(x_ave,2)-x2_ave);
                b=y_ave-k*x_ave;
                r=(xy_ave-x_ave*y_ave)/Math.sqrt((x2_ave-Math.pow(x_ave,2))*(y2_ave-Math.pow(y_ave,2)));
                this.k=k.toFixed(2);
                this.b=b.toFixed(2);
                this.r=r.toFixed(2);
            }
            this.x_o=x_o;
            this.x_ave=x_ave;
            
        }
    },
    watch:{
        DataNumber:{
            handler(){
                if(this.DataNumber>=2){
                    if(this.DataNumber>this.Data.length){
                        while(this.DataNumber>this.Data.length)
                            this.Data.push([,]);
                    }
                    else if(this.DataNumber<this.Data.length){
                        while(this.DataNumber<this.Data.length)
                            this.Data.pop();
                    }
                }else{
                    this.DataNumber=2;
                }
            }
        }
    }
});