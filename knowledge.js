

//进程
/* 
进程：是并发执行的程序 在执行过程中 分配和管理资源 的基本单位，是一个动态概念，竞争计算机系统资源的基本单位。
线程：是进程的一个执行单元，是处理器调度和分派的基本单位。比进程更小的独立运行的基本单位。线程也被称为轻量级进程。
一个程序至少一个进程，一个进程至少一个线程。


进程与线程的区别

1. 线程是程序执行的最小单位，而进程是操作系统分配资源的最小单位；

2. 一个进程由一个或多个线程组成，线程是一个进程中代码的不同执行路线

3. 进程之间相互独立，但同一进程下的各个线程之间共享程序的内存空间(包括代码段，数据集，堆等)及一些进程级的资源(如打开文件和信

号等)，某进程内的线程在其他进程不可见；

4. 调度和切换：线程上下文切换比进程上下文切换要快得多

*/


dom.style.width/height

dom.currentStyle.width



export default [
	{
		path: '/loginIndex',
		name: 'login',
		meta: {
			title: 'login',
			hideInMenu: true
		},
		component: resolve => {
			require(['@/pages/login/login'], resolve);
		}
	}
]


{
	path: '/loginIndex',
	name: 'login',
	meta:{
		hideInMenu: true,
		title: 'login'
	},
	component: resolve => {
		require(['@/pages/login/login'], resolve);
	}
}