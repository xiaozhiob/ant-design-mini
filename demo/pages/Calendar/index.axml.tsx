import { InternalData, Page, View } from 'tsxml';
import AntButton from '../../../src/Button/index.axml';
import AntCalendar from '../../../src/Calendar/index.axml';
import AntIcon from '../../../src/Icon/index.axml';
import CollapseContainer from './collapse-container/collapse-container.axml';
import CnDay from './collapse-container/cn-day/cn-day.axml';

export default ({
  demo1,
  demo2,
  demo3,
  demo4,
  demo5,
  demo6,
  demo7,
  demo8,
  demo9,
  prop,
  demo8Formatter,
  demoFormatter,
}: InternalData) => (
  <Page>
    {/* 默认情况下显示最近 6 个月 */}
    {demo1.visible && (
      <CollapseContainer title="默认多选，范围 3 个月">
        <View slot="content" style="height: 1000rpx">
          <AntCalendar defaultValue={demo1.defaultValue} />
        </View>
      </CollapseContainer>
    )}
    {/* 单选 */}
    {demo2.visible && (
      <CollapseContainer title="单选">
        <View slot="content" style="height: 1000rpx">
          <AntCalendar
            selectionMode="single"
            defaultValue={demo2.defaultValue}
            changedScrollIntoView
          />
        </View>
      </CollapseContainer>
    )}
    {/* 自定义日历顶部 */}
    {demo3.visible && (
      <CollapseContainer title="自定义日历顶部">
        <View slot="content">
          <View class="custom-header">
            <View onTap="demo3PreviousMonth" class="custom-header-left">
              <AntIcon type="LeftOutline" />
              上个月
            </View>
            <View>{demo3.title}</View>
            <View onTap="demo3NextMonth" class="custom-header-right">
              下个月
              <AntIcon type="RightOutline" />
            </View>
          </View>
          <AntCalendar monthRange={demo3.monthRange}>
            <View slot="calendarTitle"></View>
          </AntCalendar>
        </View>
      </CollapseContainer>
    )}
    {/* 标记奇偶数 */}
    {demo8.visible && (
      <CollapseContainer title="自定义日期单元格">
        <View slot="content">
          <AntCalendar
            monthRange={demo8.monthRange}
            onFormatter={demo8Formatter ? demo8Formatter : 'demo8Formatter'}
          />
        </View>
      </CollapseContainer>
    )}
    {/* 最多选择三天 */}
    {demo4.visible && (
      <CollapseContainer title="动态控制，只允许选择前后三天">
        <View slot="content">
          <AntCalendar
            monthRange={demo4.monthRange}
            onFormatter={demoFormatter ? demoFormatter : 'demoFormatter'}
          />
        </View>
      </CollapseContainer>
    )}
    {/* 从周一开始 */}
    {demo5.visible && (
      <CollapseContainer title="从周一开始">
        <View slot="content" style="height: 1000rpx">
          <AntCalendar weekStartsOn="Monday" />
        </View>
      </CollapseContainer>
    )}
    {/* 通过 slot 实现农历 */}
    {/* #if ALIPAY */}
    {demo6.visible && (
      <CollapseContainer title="通过 slot 实现农历">
        <View slot="content">
          <AntCalendar monthRange={demo6.monthRange}>
            <View slot="cell-bottom" slot-scope="prop">
              <CnDay cell={prop.cell} />
            </View>
          </AntCalendar>
        </View>
      </CollapseContainer>
    )}
    {/* #endif */}
    {/* 国际化 */}
    {demo7.visible && (
      <CollapseContainer title="国际化">
        <View slot="content">
          <AntCalendar
            monthRange={demo7.monthRange}
            localeText={demo7.localeText}
          />
        </View>
      </CollapseContainer>
    )}
    {/* 受控模式 */}
    {demo9.visible && (
      <CollapseContainer title="受控模式">
        <View slot="content" style="height: 1000rpx">
          <AntCalendar
            ref="handleRef"
            value={demo9.value}
            onChange="demo9HandleChange"
            selectionMode="single"
            changedScrollIntoView
          />
          <AntButton type="primary" onTap="demo9HandlePreviousDay">
            上一天
          </AntButton>
          <AntButton
            style="margin-top:8rpx"
            type="primary"
            onTap="demo9HandleNextDay"
          >
            下一天
          </AntButton>
          <AntButton
            style="margin-top:8rpx"
            type="primary"
            onTap="demo9HandleScrollIntoView"
          >
            滚动到指定日期
          </AntButton>
        </View>
      </CollapseContainer>
    )}
  </Page>
);
