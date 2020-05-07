# installation

	npm i react-thumbnails-video-preview

# Examples:

## Basic usage :
	import React from "react";
	import ReactVideosPreview from "react-thumbnails-video-preview";

	const list = [
		{
			imgList: [
				`https://dummyimage.com/200x200/111/fff&text=1`,
				`https://dummyimage.com/200x200/111/fff&text=2`,
				`https://dummyimage.com/200x200/111/fff&text=3`
			]
		}
	];

	export default function Example() {
		return (
			<ReactVideosPreview list={list}/>
		);
	}

 [![Edit react-thumbnails-video-preview basic usage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/pedantic-pasteur-xbufi?fontsize=14&hidenavigation=1&theme=dark)

## List usage:

you just need to add more elements in list array

	...
	const list = [
		{
			imgList: [
				`https://dummyimage.com/200x200/111/fff&text=1`,
				`https://dummyimage.com/200x200/111/fff&text=2`,
				`https://dummyimage.com/200x200/111/fff&text=3`
			]
		},
		{
			imgList: [
				`https://dummyimage.com/200x200/111/fff&text=3`,
				`https://dummyimage.com/200x200/111/fff&text=`,
				`https://dummyimage.com/200x200/111/fff&text=3`
			]
		}
	];
	...

 
[![Edit grid example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/grid-example-nj3zk?fontsize=14&hidenavigation=1&theme=dark)
	
## imgError :

global way

	<ReactVideosPreview 
		list={list}
		imgError:"https://dummyimage.com/200x200/111/fff&text=error-loading"
		/>

or in List object for individuals images error

	...
	const list = [{
		...
		imgError:  `https://dummyimage.com/200x200/111/fff&text=error-loading`
	}];
	...
[![Edit error gestion](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/error-gestion-gxlpu?fontsize=14&hidenavigation=1&theme=dark)
