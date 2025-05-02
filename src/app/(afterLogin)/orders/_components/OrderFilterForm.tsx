'use client';

import 'react-calendar/dist/Calendar.css';

import dayjs from 'dayjs';
import type { ChangeEventHandler, FormEventHandler } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import type { Value } from 'react-calendar/dist/esm/shared/types.js';

import { Button, Tabs, TextField } from '@/components';
import { Calendar as CalendarIcon, MagnifyingGlass } from '@/components/Icon';
import colors from '@/constants/colors';
import filterOnlyNumbers from '@/utils/filterOnlyNumbers';
import preventSubmitByEnter from '@/utils/preventSubmitByEnter';

import { SubTitle } from '../../_components';

type OrderPeriod = 'yesterday' | 'month' | 'quarter' | 'half';

const initialFormValues = {
  startDate: '',
  endDate: '',
};

const OrderFilterForm = () => {
  console.log('werw');

  const startDateCalendarRef = useRef<HTMLDivElement>(null);
  const endDateCalendarRef = useRef<HTMLDivElement>(null);
  const orderNumberInputRef = useRef<HTMLInputElement>(null);
  const customerInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const [formValues, setFormValues] = useState(initialFormValues);
  const [orderPeriodTab, setOrderPeriodTab] = useState<OrderPeriod | undefined>();
  const [calendarOpen, setCalendarOpen] = useState({
    startDate: false,
    endDate: false,
  });

  useEffect(() => {
    const handleStartDateCalendarOutsideClick = (e: MouseEvent) => {
      if (
        startDateCalendarRef.current &&
        !startDateCalendarRef.current.contains(e.target as Node)
      ) {
        setCalendarOpen((prev) => ({
          ...prev,
          startDate: false,
        }));
      }
    };

    const handleEndDateCalendarOutsideClick = (e: MouseEvent) => {
      if (endDateCalendarRef.current && !endDateCalendarRef.current.contains(e.target as Node)) {
        setCalendarOpen((prev) => ({
          ...prev,
          endDate: false,
        }));
      }
    };

    document.addEventListener('mousedown', handleStartDateCalendarOutsideClick);
    document.addEventListener('mousedown', handleEndDateCalendarOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleStartDateCalendarOutsideClick);
      document.removeEventListener('mousedown', handleEndDateCalendarOutsideClick);
    };
  }, []);

  const handleOrderPeriodChange = (name: 'startDate' | 'endDate') => (value: Value) => {
    if (!value) return;

    setFormValues({
      ...formValues,
      [name]: dayjs(value as Date).format('YYYY-MM-DD'),
    });
    setOrderPeriodTab(undefined);
  };

  const handlePeriodTabClick = (value: string) => {
    setOrderPeriodTab(value as OrderPeriod);

    const today = dayjs();

    switch (value as OrderPeriod) {
      case 'yesterday':
        setFormValues({
          startDate: today.subtract(1, 'day').format('YYYY-MM-DD'),
          endDate: today.format('YYYY-MM-DD'),
        });
        break;
      case 'month':
        setFormValues({
          startDate: today.subtract(1, 'month').format('YYYY-MM-DD'),
          endDate: today.format('YYYY-MM-DD'),
        });
        break;
      case 'quarter':
        setFormValues({
          startDate: today.subtract(3, 'month').format('YYYY-MM-DD'),
          endDate: today.format('YYYY-MM-DD'),
        });
        break;
      case 'half':
        setFormValues({
          startDate: today.subtract(6, 'month').format('YYYY-MM-DD'),
          endDate: today.format('YYYY-MM-DD'),
        });
        break;
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.type === 'tel') {
      event.target.value = filterOnlyNumbers(event.target.value);
    }
  };

  const resetFormValues = () => {
    if (!orderNumberInputRef.current || !customerInputRef.current || !phoneInputRef.current) return;

    setFormValues(initialFormValues);
    orderNumberInputRef.current.value = '';
    customerInputRef.current.value = '';
    phoneInputRef.current.value = '';
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    if (!orderNumberInputRef.current || !customerInputRef.current || !phoneInputRef.current) return;

    event.preventDefault();

    console.group(
      formValues,
      orderNumberInputRef.current.value,
      customerInputRef.current.value,
      phoneInputRef.current.value,
    );
  };

  return (
    <section>
      <div className="flex flex-col gap-8">
        <SubTitle>조회 조건</SubTitle>
        <form onSubmit={handleSubmit} onKeyDown={preventSubmitByEnter}>
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-8 rounded-lg bg-neutral-100 px-10 py-8">
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5">
                  <span>주문기간</span>
                  <div className="flex items-center gap-1">
                    <div
                      ref={startDateCalendarRef}
                      className="relative"
                      onClick={() => setCalendarOpen({ ...calendarOpen, startDate: true })}
                    >
                      <TextField
                        className="h-[48px] w-[160px]"
                        placeholder="YYYY-MM-DD"
                        rightIcon={<CalendarIcon color={colors.neutral300} />}
                        value={formValues.startDate}
                        readOnly
                      />
                      {calendarOpen.startDate && (
                        <div className="absolute left-[-50%] z-10">
                          <Calendar
                            maxDate={formValues.endDate ? new Date(formValues.endDate) : undefined}
                            onChange={handleOrderPeriodChange('startDate')}
                          />
                        </div>
                      )}
                    </div>
                    <span>~</span>
                    <div
                      ref={endDateCalendarRef}
                      className="relative"
                      onClick={() => setCalendarOpen({ ...calendarOpen, endDate: true })}
                    >
                      <TextField
                        className="h-[48px] w-[160px]"
                        placeholder="YYYY-MM-DD"
                        rightIcon={<CalendarIcon color={colors.neutral300} />}
                        value={formValues.endDate}
                        readOnly
                      />
                      {calendarOpen.endDate && (
                        <div className="absolute left-[-50%] z-10">
                          <Calendar
                            minDate={
                              formValues.startDate ? new Date(formValues.startDate) : undefined
                            }
                            onChange={handleOrderPeriodChange('endDate')}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="ml-14">
                  <Tabs
                    variant="depth2"
                    items={[
                      {
                        label: '어제',
                        value: 'yesterday',
                      },
                      {
                        label: '1개월',
                        value: 'month',
                      },
                      {
                        label: '3개월',
                        value: 'quarter',
                      },
                      {
                        label: '6개월',
                        value: 'half',
                      },
                    ]}
                    activeTab={orderPeriodTab}
                    onTabClick={handlePeriodTabClick}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span>주문번호</span>
                <div className="flex-1">
                  <TextField
                    ref={orderNumberInputRef}
                    type="tel"
                    name="orderNumber"
                    className="h-[48px]"
                    placeholder="주문번호를 입력해주세요."
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span>주문자명</span>
                <div className="flex-1">
                  <TextField
                    ref={customerInputRef}
                    name="customer"
                    className="h-[48px]"
                    placeholder="주문자명을 입력해주세요."
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span>휴대폰번호</span>
                <div className="flex-1">
                  <TextField
                    ref={phoneInputRef}
                    type="tel"
                    name="phone"
                    className="h-[48px] flex-1"
                    placeholder="‘-’ 제외하고 입력해주세요."
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                type="button"
                className="w-[160px]"
                variant="outlinePrimary"
                onClick={resetFormValues}
              >
                초기화
              </Button>
              <Button className="w-[160px]" leftIcon={<MagnifyingGlass />}>
                조회
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderFilterForm;
